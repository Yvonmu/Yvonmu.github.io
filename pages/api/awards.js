import dbConnect from "../../utils/mongo";
import Awards from "../../models/award";

export default async function awardHandler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "POST") {
    try {
      const award = await Awards.create(req.body)
        .then(() => console.log("award created successfully!"))
        .catch((err) => {
          console.log(err);
        });

      res.status(201).json(award);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else if (method === "GET") {
    try {
      const award = await Awards.find().populate({path:'driver', select:['firstName','password']});
      return res.status(201).send({message:'award fetched successfully!', data:award})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
  else if (method === "DELETE") {
    try {
      const { id } = req.query;
      await Awards.findByIdAndDelete({ _id: id }).catch((err)=>{throw error });
      return res.status(200).send({message:'award deleted successfully!'})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
  else if (method === "UPDATE") {
    try {
      const { id } = req.query;
      await Awards.findByIdAndUpdate({ _id: id }).catch((err)=>{throw error });
      return res.status(200).send({message:'project deleted successfully!'})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
}
