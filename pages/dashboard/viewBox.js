import React from "react";
import db from "../../utils/db";
import Clients from "../../models/clients";
import Resume from "../../models/resume";
import Awards from "../../models/award";
import Projects from "../../models/project";
import Dashboard from "../../components/Dashboard";

const ViewBox = (props) => {
  const { resume, clients, project, award } = props;
  return (
    <Dashboard>
      {/* //////clients */}
      <div className="bg-white mt-16">
        <div>
          <h2 className="text-2xl p-4 font-semibold leading-tight">Clients</h2>
        </div>
        <div className="mt-10 flex w-3/4 rounded-lg shadow-xl bg-white h-auto p-2">
          <div className="grid grid-cols-3">
            {clients.map((item) => {
              return (
                <div key={item._id}>
                  <div className="flex py-4 justify-start">
                    <img
                      className="h-20 w-20 border border-gray-100 shadow-sm"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex space-x-2 justify-center w-full">
                    <button className="w-1/4 bg-red-600 px-2 text-white">
                      Delete
                    </button>
                    <button className="w-1/4 bg-green-600 text-white px-2">
                      Update
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* /////////////////awards */}
      <div className="bg-white mt-16">
        <div>
          <h2 className="text-2xl font-semibold leading-tight p-4">Awards</h2>
        </div>
        <div className="mt-10 flex w-3/4 rounded-lg shadow-xl bg-white h-auto p-2">
          <div className="grid grid-cols-3">
            {award.map((item) => {
              return (
                <div key={item._id}>
                  <div className="flex py-4 justify-start">
                    <img
                      className="h-20 w-20 border border-gray-100 shadow-sm"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <h2 className="text-base mt-2 text-gray-400 font-semibold">
                    {item.name}
                  </h2>
                  <div className="flex space-x-2 justify-center w-full">
                    <button className="w-1/4 bg-red-600 px-2 text-white">
                      Delete
                    </button>
                    <button className="w-1/4 bg-green-600 text-white px-2">
                      Update
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* //////////////Project */}
      <div className="w-full bg-white mt-16">
        <div className="container mx-auto">
          <div className="">
            <div>
              <h2 className="text-2xl p-4 font-semibold leading-tight">
                Board Team
              </h2>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Project / Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Details
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Update
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Delete
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                    </tr>
                  </thead>
                  {project.map((item) => {
                    return (
                      <tbody key={item._id}>
                        <tr>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={item.image}
                                  alt={item.name}
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {item.name}
                                </p>
                                <p className="text-gray-600 whitespace-no-wrap">
                                  {item.title}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {item.details}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-600 hover:bg-green-900 text-white rounded-full"
                              ></span>
                              <span className="relative text-white cursor-pointer">
                                &#10003;
                              </span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-red-600 hover:bg-red-900 text-white rounded-full"
                              ></span>
                              <span className="relative text-white cursor-pointer">
                                X
                              </span>
                            </span>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                            <button
                              type="button"
                              className="inline-block text-gray-500 hover:text-gray-700"
                            >
                              <svg
                                className="inline-block h-6 w-6 fill-current"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default ViewBox;
export async function getServerSideProps() {
  await db.connect();
  const client = await Clients.find({}).lean();
  const resume = await Resume.find({}).lean();
  const awards = await Awards.find({}).lean();
  const project = await Projects.find({}).lean();
  await db.disconnect();
  return {
    props: {
      resume: JSON.parse(JSON.stringify(resume.map(db.convertDocToObj))),
      clients: JSON.parse(JSON.stringify(client.map(db.convertDocToObj))),
      project: JSON.parse(JSON.stringify(project.map(db.convertDocToObj))),
      award: JSON.parse(JSON.stringify(awards.map(db.convertDocToObj))),
    },
  };
}
