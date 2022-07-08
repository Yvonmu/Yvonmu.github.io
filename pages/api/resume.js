import dbConnect from "../../utils/mongo";
import Resume from "../../models/resume";

export default async function resumeHandler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "POST") {
    try {
      const client = await Resume.create(req.body)
        .then(() => console.log("client created successfully!"))
        .catch((err) => {
          console.log(err);
        });

      res.status(201).json(client);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  else if (method === "GET") {
    try {
      const client = await Resume.find().populate({path:'driver', select:['firstName','password']});
      return res.status(201).send({message:'client fetched successfully!', data:client})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
  else if (method === "DELETE") {
    try {
      const { id } = req.query;
      await Resume.findByIdAndDelete({ _id: id }).catch((err)=>{throw error });
      return res.status(200).send({message:'client deleted successfully!'})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
  else if (method === "UPDATE") {
    try {
      const { id } = req.query;
      await Resume.findByIdAndUpdate({ _id: id }).catch((err)=>{throw error });
      return res.status(200).send({message:'project deleted successfully!'})
  
    } catch (error) {
      return res.status(500).send({message:'SERVER_ERROR'})
    }
  }
}
