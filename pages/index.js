import Link from "next/link";
import Box from "../components/box";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { BiDownArrow } from "react-icons/bi";
import { FaArrowCircleUp } from "react-icons/fa";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import Hamburger from "hamburger-react";
import { useRouter } from "next/router";
import { useState } from "react";
import db from "../utils/db";
import Clients from "../models/clients";
import Resume from "../models/resume";
import Awards from "../models/award";
import Projects from "../models/project";

export default function Home(props) {
  var { resume, clients, project, award } = props;
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const { text } = useTypewriter({
    words: [
      "Software Developer",
      "UI/UX Designer",
      "CyberSecurity Expert!",
      "Mobile App Developer!",
    ],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  award = award.slice(0, 5);
  project = project.slice(0, 5);
  return (
    <div>
      <Box num={1}>
        <div
          className="bg-cover"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(images/may.jpg)",
          }}
        >
          <div className="text-white sm:hidden flex p-4">
            <div className="w-3/4">
              <img src="/images/may.jpg" className="w-40 h-full rounded-2xl" />
            </div>
            <div className="flex space-x-4 py-4 w-1/2">
              <div className="h-8 hover:bg-gray-200 hover:text-black">
                <Link href="#whoami">
                  <a className="text-xl font-mono hover:p-1">Whoami</a>
                </Link>
              </div>
              <div className="h-8 hover:bg-gray-200 hover:text-black">
                <Link href="#projects">
                  <a className="text-xl font-mono hover:p-1">Projects</a>
                </Link>
              </div>
              <div className="h-8 hover:bg-gray-200 hover:text-black">
                <Link href="#clients">
                  <a className="text-xl font-mono hover:p-1">Clients</a>
                </Link>
              </div>
              <div className="h-8 hover:bg-gray-200 hover:text-black">
                <Link href="#others">
                  <a className="text-xl font-mono hover:p-1">Others</a>
                </Link>
              </div>
              <div className="">
                <Link href="">
                  <a className="px-4 py-1 hover:bg-green-700 rounded-full text-xl font-mono bg-green-800">
                    BuyMeCoffee
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <nav className="md:hidden z-10 flex text-white w-full bg-green-800">
            <div className="w-3/4">
              <img src="/images/may.jpg" className="w-20 py-2 rounded-2xl" />
            </div>
            <div className="mt-2 z-10 w-1/4">
              <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
              {isOpen ? (
                <div className="px-2 -ml-28">
                  <div className="h-8 hover:bg-gray-200 hover:text-black">
                    <Link href="#whoami">
                      <a className="text-xl font-mono hover:p-1">Whoami</a>
                    </Link>
                  </div>
                  <div className="h-8 hover:bg-gray-200 hover:text-black">
                    <Link href="#projects">
                      <a className="text-xl font-mono hover:p-1">Projects</a>
                    </Link>
                  </div>
                  <div className="h-8 hover:bg-gray-200 hover:text-black">
                    <Link href="#clients">
                      <a className="text-xl font-mono hover:p-1">Clients</a>
                    </Link>
                  </div>
                  <div className="h-8 hover:bg-gray-200 hover:text-black">
                    <Link href="#others">
                      <a className="text-xl font-mono hover:p-1">Others</a>
                    </Link>
                  </div>
                  <div className="">
                    <Link href="">
                      <a className="px-4 py-1 hover:bg-green-700 rounded-full text-xl font-mono bg-green-800">
                        BuyMeCoffee
                      </a>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </nav>
          <div className="grid place-items-center h-screen text-white">
            <div className="text-center">
              <p className="font-serif pb-8 text-xl">Hey, I&#39;m</p>

              <div className="flex md:space-x-4 justify-center">
                <hr className="md:w-48 sm:w-6 bg-white md:h-1 sm:mt-3 md:mt-6" />

                <h1 className="typing cursor-default md:text-5xl font-serif font-bold">
                  Yvon MUTUYEYEZU
                </h1>
                <hr className="md:w-48 sm:w-6 bg-white md:h-1 sm:mt-3 md:mt-6" />
              </div>

              <p className="mt-2 text-xl sm:text-xs flex sm:flex-wrap">
                Lorem ipsum dolor sit amet consectetur, adipisi{" "}
                <span className="text-yellow-600 md:ml-4 md:text-xl sm:w-full">
                  {text}
                </span>
                <Cursor />
              </p>
              <div className="flex justify-center my-8">
                <a
                  href="https://drive.google.com/file/d/1DPt2vIXWCtTplepJjsWgecVhUoUrWh8B/view?usp=sharing"
                  className="bg-green-800 hover:bg-green-700 py-2 rounded-2xl md:px-12 sm:px-4 md:text-xl"
                >
                  Resume
                </a>
              </div>
              <div className="flex text-4xl space-x-12 sm:space-x-2 my-4 text-yellow-600 justify-center">
                <Link href="https://twitter.com/Yvon_Mutuyeyezu">
                  <a target="_blank">
                    <AiFillTwitterCircle className="hover:text-white cursor-pointer" />
                  </a>
                </Link>
                <Link href="https://github.com/Yvonmu">
                  <a target="_blank">
                    <AiFillGithub className="hover:text-white cursor-pointer" />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/yvonmu/">
                  <a target="_blank">
                    <FiInstagram className="hover:text-white cursor-pointer" />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/yvon-mutuyeyezu/">
                  <a target="_blank">
                    <AiFillLinkedin className="hover:text-white cursor-pointer" />
                  </a>
                </Link>
              </div>
              <div className="">
                View More
                <div className="flex justify-center text-yellow-600">
                  <BiDownArrow className="animate-bounce text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box num={2}>
        <div id="whoami" className="h-screen text-white bg-gray-800">
          <div className="flex sm:flex-wrap md:px-20 px-4 w-full md:space-x-8 text-white">
            <div className="md:w-1/2 sm:w-full text-center">
              <h1 className=" md:pt-28 md:text-6xl md:my-12 sm:my-4">
                Ethical Hacker
              </h1>
              <p className="md:text-xl text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
            <div className="md:w-1/2 sm:w-full text-center">
              <h1 className=" md:pt-28 md:text-6xl md:my-12 sm:my-4">
                {"<"}Coder{">"}
              </h1>
              <p className=" md:text-xl text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam
              </p>
            </div>
          </div>
          {/* <div className="flex justify-center">
            <button className="bg-green-800 hover:bg-green-700 px-4 px-2 sm:mt-8 md:px-12 md:text-xl">
              Hire Me
            </button>
          </div> */}
        </div>
      </Box>
      <div id="projects">
        <Box num={3}>
          <div className="bg-gray-700 h-full">
            <div className="flex md:py-16 sm:py-8 justify-center">
              <div className="flex w-full space-x-4 justify-center">
                <hr className="md:w-48 bg-white h-1 mt-6" />
                <>
                  <p className="md:text-5xl flex font-serif sm:text-2xl text-gray-400 text-center font-bold">
                    <span className="text-green-600">Project</span> &nbsp;
                    Worked On
                    <sub className="text-xs">(recent...)</sub>
                  </p>
                </>
                <hr className="md:w-48 bg-white h-1 mt-6" />
              </div>
            </div>
            <div
              id="description"
              className="grid place-items-center text-white"
            >
              {project.map((item) => {
                return (
                  <div
                    key={item._id}
                    className="flex md:w-1/2 sm:w-full md:space-x-12 sm:px-3 sm:flex-wrap md:py-4"
                  >
                    <div className="md:w-1/4 sm:w-full bg-cover md:h-28">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-80 h-full rounded-2xl"
                      />
                    </div>
                    <div className="md:w-3/4 sm:w-full mb-8">
                      <h1 className="md:text-2xl sm:text-lg font-bold">
                        {item.name}
                      </h1>
                      <h2 className="text-green-600">{item.title}</h2>
                      <p className="md:w-3/4 md:mt-4 text-gray-400">
                        {item.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Box>
      </div>
      <Box num={4}>
        <div className="p-8" id="clients">
          <div className="flex w-full space-x-4 justify-center">
            <hr className="md:w-48 bg-gray-400 h-1 mt-6" />
            <>
              <p className="md:text-5xl flex font-serif sm:text-2xl text-gray-400 text-center font-bold">
                <span className="text-green-600">Clients</span>
              </p>
            </>
            <hr className="md:w-48 bg-gray-400 h-1 mt-6" />
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-3 md:mx-56">
            {clients.map((item) => {
              return <img key={item._id} src={item.image} alt={item.name} />;
            })}
          </div>
        </div>
        <div
          id="others"
          className="py-20"
          style={{ backgroundColor: "#2E3440" }}
        >
          <div className="md:mx-40 shadow-2xl flex sm:flex-wrap">
            <div className="md:w-1/2 sm:w-full p-4 text-gray-500">
              <h1 className="md:text-2xl font-semibold font-serif">
                CERTIFICATES / AWARDS
              </h1>
              <hr className="bg-gray-400 my-4" />
              {award.map((item) => {
                return (
                  <>
                    <p className="" key={item._id}>
                      {item.name}
                    </p>
                    <hr className="bg-gray-400 my-4" />
                  </>
                );
              })}
              <div className="flex justify-end">
                <Link href="./awards">
                  <a className="px-4 py-1 hover:bg-green-700 text-white cursor-pointer text-xl font-mono bg-green-800">
                    View More
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 sm:w-full p-4 text-gray-500">
              <h1 className="md:text-2xl font-semibold pb-2">INTERESTS</h1>
              <p className="mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                odit, qui non explicabo magnam pariatur dolor impedit placeat
                nemo! Nulla, optio! Libero saepe dolorem, nostrum quos quis amet
                quidem optio?
              </p>
              <h1 className="md:text-2xl font-semibold pb-2">ICEBREAKERS</h1>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                odit, qui non explicabo magnam pariatur dolor impedit placeat
                nemo! Nulla, optio! Libero saepe dolorem, nostrum quos quis amet
                quidem optio?
              </p>
            </div>
          </div>
          <div className="my-8">
            <hr />
            <div id="scroll-container">
              <h1
                id="scroll-text"
                style={{ fontSize: 70, fontFamily: "fantasy" }}
                className="my-8 cursor-default text-gray-600 hover:text-green-800 font-bold hover:not-italic italic tracking-wide"
              >
                LET&#39;S TALK VIA ANY PLATFORM{" "}
              </h1>
            </div>
            <hr />
          </div>
          <div className="flex justify-center text-gray-500 mb-2">
            <Link href="mailto: yvonmu2@gmail.com" passHref>
              <a className="text-2xl">yvonmu2@gmail.com</a>
            </Link>
          </div>
          <div className="flex text-4xl space-x-12 sm:space-x-2 mt-4 text-gray-500 justify-center">
            <Link href="https://twitter.com/Yvon_Mutuyeyezu">
              <a target="_blank">
                <AiFillTwitterCircle className="hover:text-white cursor-pointer" />
              </a>
            </Link>
            <Link href="https://github.com/Yvonmu">
              <a target="_blank">
                <AiFillGithub className="hover:text-white cursor-pointer" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/yvonmu/">
              <a target="_blank">
                <FiInstagram className="hover:text-white cursor-pointer" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/yvon-mutuyeyezu/">
              <a target="_blank">
                <AiFillLinkedin className="hover:text-white cursor-pointer" />
              </a>
            </Link>
          </div>
        </div>
      </Box>
      <a
        href="#top"
        className="text-4xl text-gray-400 bottom-0 right-0 mb-4 md:mr-8 z-10 fixed"
      >
        <FaArrowCircleUp />
      </a>
    </div>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const client = await Clients.find({}).sort({ updatedAt: -1 }).lean();
  const resume = await Resume.find({}).sort({ updatedAt: -1 }).lean();
  const awards = await Awards.find({}).sort({ updatedAt: -1 }).lean();
  const project = await Projects.find({}).sort({ updatedAt: -1 }).lean();
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
