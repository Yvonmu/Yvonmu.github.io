import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#2E3440" }} className="py-16">
      <div className="flex justify-center text-gray-500">
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
  );
};

export default Footer;
