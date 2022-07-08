import Hamburger from "hamburger-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="text-white sm:hidden bg-green-800 flex p-4">
        <div className="w-3/4">
          <Link href="/">
            <img src="/images/may.jpg" className="w-40 h-full rounded-2xl" />
          </Link>
        </div>
        <div className="flex space-x-4 py-4 w-1/2">
          <div className="h-8 hover:bg-gray-200 hover:text-black">
            <Link href="/">
              <a className="text-xl font-mono hover:p-1">Whoami</a>
            </Link>
          </div>
          <div className="h-8 hover:bg-gray-200 hover:text-black">
            <Link href="../#projects">
              <a className="text-xl font-mono hover:p-1">Projects</a>
            </Link>
          </div>
          <div className="h-8 hover:bg-gray-200 hover:text-black">
            <Link href="../#clients">
              <a className="text-xl font-mono hover:p-1">Clients</a>
            </Link>
          </div>
          <div className="h-8 hover:bg-gray-200 hover:text-black">
            <Link href="../#others">
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
                <Link href="/">
                  <a className="text-xl font-mono hover:p-1">Whoami</a>
                </Link>
              </div>
              <div className="h-8 hover:bg-gray-200 hover:text-black">
                <Link href="../#projects">
                  <a className="text-xl font-mono hover:p-1">Projects</a>
                </Link>
              </div>
              <div className="h-8 hover:bg-gray-200 hover:text-black">
                <Link href="../#clients">
                  <a className="text-xl font-mono hover:p-1">Clients</a>
                </Link>
              </div>
              <div className="h-8 hover:bg-gray-200 hover:text-black">
                <Link href="../#others">
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
    </div>
  );
};

export default Navbar;
