import axios from "axios";
import React, { useState } from "react";
import Dashboard from "../../components/Dashboard";

export const data = [
  ["Task", "Hours per Week"],
  ["Booking", 11],
  ["Visitors", 2],
  ["Order", 2],
  ["Earning", 7],
];

export const monthly_data = [
  ["Task", "Hours per Week"],
  ["Booking", 11],
  ["Driver Assigned", 7],
];
export const monthly_options = {
  title: "Monthly Activities",
};
export const options = {
  title: "Weekly Activities",
};
export default function Index() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [img, setImg] = useState("");
  const [awardName, setAwardName] = useState("");
  const [awardImg, setAwardImg] = useState("");
  const [clientImg, setClientImg] = useState("");

  const [awardHandler, setAwardHandler] = useState([]);
  const [clientHandler, setClientHandler] = useState([]);
  const [handler, setHandler] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const awardSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading1(true);
    const mainImage = new FormData();
    mainImage.append("file", awardImg);
    mainImage.append("upload_preset", "jl05a008");

    const mainRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dbqwmndns/image/upload",
      mainImage
    );
    const image = await mainRes.data.secure_url;
    const info = { name: awardName, image };
    await axios
      .post("../api/awards", info)
      .then((res) => {
        setAwardHandler([...awardHandler, res.data.data]);
        setClientName("");
        setLoading1(false);
        return alert("Award Upload successful");
      })
      .catch((err) => {
        setLoading1(false);
        alert(err);
      });
  };
  const projectSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const mainImage = new FormData();
    mainImage.append("file", img);
    mainImage.append("upload_preset", "jl05a008");

    const mainRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dbqwmndns/image/upload",
      mainImage
    );
    const image = await mainRes.data.secure_url;
    const info = { name, title,details, image };
    await axios
      .post("../api/project", info)
      .then((res) => {
        setHandler([...handler, res.data.data]);
        setName("");
        setTitle("");
        setDetails("");
        setLoading(false);
        return alert("project Member uploaded successful");
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };
  const clientSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading2(true);
    const mainImage = new FormData();
    mainImage.append("file", clientImg);
    mainImage.append("upload_preset", "jl05a008");

    const mainRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dbqwmndns/image/upload",
      mainImage
    );
    const image = await mainRes.data.secure_url;
    const info = {image };
    await axios
      .post("../api/clients", info)
      .then((res) => {
        setClientHandler([...clientHandler, res.data.data]);
        setLoading2(false);
        return alert("Client Uploaded");
      })
      .catch((err) => {
        setLoading2(false);
        alert(err);
      });
  };
  return (
    <>
      <Dashboard>
        <div className="bg-white p-10">
          <h1 className="h3 mb-3">
            <strong>Admin</strong> Dashboard
          </h1>
          <div className="w-1/4 shadow-2xl border p-4">
            <div className="row">
                <h5 className="text-xl font-semibold">Visitor</h5>
            </div>
            <h1 className="mt-1 mb-3 text-lg">2.382</h1>
            <div className="flex">
              <span className="text-danger">-3.65% &nbsp;
              </span>
              <span className="text-muted">Since last week</span>
            </div>
          </div>

          <div className="container py-8 flex">
            <div className="sm:w-full md:w-1/2 bg-white rounded shadow-xl">
              <div className="py-4 text-center bg-gray-400 px-8 text-black text-xl border-b border-grey-lighter">
                Create Project
              </div>
              <div className="py-4 px-8">
                <div className="mb-4">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="city"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="city"
                    type="text"
                    placeholder="City"
                    value={name}
                onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex mb-4">
                  <div className="w-full mr-1">
                    <label
                      className="block text-grey-darker text-sm font-bold mb-2"
                      htmlFor="first_name"
                    >
                      Title
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                      id="first_name"
                      type="text"
                      placeholder="title"
                      value={title}
                onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-7 sm:col-span-3">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    {" "}
                    Project Description
                  </label>
                  <textarea
                    type="text"
                    className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    placeholder="Description"
                    rows="3"
                    value={details}
                onChange={(e) => setDetails(e.target.value)}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm w-full font-medium text-gray-700">
                    Project photo
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-3 pb-4 w-full -mr-4 border-2 border-gray-300 border-dashed rounded-md ">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-6 w-6 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="True"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            onChange={(e) => setImg(e.target.files[0])}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8">
                  <button
                  onClick={projectSubmitHandler}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Upload Project
                  </button>
                </div>
              </div>
            </div>
            <div className="sm:w-full md:w-1/2 bg-white rounded shadow-xl">
              <div className="py-4 text-center bg-green-600 px-8 text-white text-xl border-b border-grey-lighter">
                Upload others
              </div>
              <div className="p-4 flex space-x-4">
                <label className="text-xl w-1/2 font-bold">Upload Resume</label>
                <input id="file-upload" name="file-upload" type="file" />
                <div className="px-3 text-3xl hover:bg-green-500 bg-green-600 text-center text-center">
                  <button onClick="">+</button>
                </div>
              </div>
              <hr />
              <div className="p-4 flex space-x-4">
                <label className="text-xl w-1/2 font-bold">Upload Client</label>
                <input onChange={(e) => setClientImg(e.target.files[0])} id="file-upload" name="file-upload" type="file" />
                <div className="px-3 hover:bg-green-500 text-3xl bg-green-600 text-center text-center">
                  <button onClick={clientSubmitHandler}>+</button>
                </div>
              </div>
              <hr />
              <div className="p-4 ">
                <label className="text-xl font-bold mb-4">
                  Upload Awards/Certificate
                </label>
                <div className="w-full mr-1">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    Name
                  </label>
                  <input
                    className="appearance-none mb-2 border rounded w-full py-2 px-3 text-grey-darker"
                    id="first_name"
                    type="text"
                    placeholder="Your first name"
                    value={awardName}
                onChange={(e) => setAwardName(e.target.value)}
                  />
                </div>
                <div className="mb-4 mt-2">
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="first_name"
                  >
                    Image
                  </label>
                  <input id="file-upload" onChange={(e) => setAwardImg(e.target.files[0])} name="file-upload" type="file" />
                </div>
                <div className="p-2 hover:bg-green-500 bg-green-600 w-1/4 text-center text-white">
                  <button onClick={awardSubmitHandler}>Upload</button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
}

