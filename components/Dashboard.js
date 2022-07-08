import Link from "next/link";
import Script from "next/script";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Store } from "../utils/store";
import Cookies from "js-cookie";

const Dashboard = (props) => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { infoMu } = state;
  const handleLogout = () => {
    dispatch({ type: "PROFILE_LOGOUT" });
    Cookies.remove("infoMu");
    router.push("/login");
  };
  useEffect(() => {
    if (!infoMu) {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <div
        style={{
          background: "#222e3c",
        }}
        className="flex"
      >
        <nav id="sidebar" className="text-xl w-1/5 h-screen text-gray-400 p-4">
          <div className="">
            <div className="mb-6">
              <Link href="/" passHref>
                <a className="text-3xl text-white">
                  <span className="align-middle">Yvon Mu</span>
                </a>
              </Link>
            </div>

            <ul className="">
              <li className="text-2xl text-gray-500 my-2">Pages</li>

              <li className="pl-4 pb-3 text-lg bg-green-600 bg-opacity-25 active">
                <Link href="../dashboard" passHref>
                  <a className="sidebar-link">
                    <i className="align-middle" data-feather="sliders"></i>{" "}
                    <span className="align-middle">dashboard</span>
                  </a>
                </Link>
              </li>

              <li className="pl-4 pb-3 text-lg">
                <Link href="../dashboard/viewBox" passHref>
                  <a className="sidebar-link" href="pages-profile.html">
                    <i className="align-middle" data-feather="user"></i>{" "}
                    <span className="align-middle">View Box</span>
                  </a>
                </Link>
              </li>
              <li className="pl-4 pb-3 text-lg">
                <Link href="../dashboard/createAccounts" passHref>
                  <a className="sidebar-link" href="pages-profile.html">
                    <i className="align-middle" data-feather="user"></i>{" "}
                    <span className="align-middle">Create Accounts</span>
                  </a>
                </Link>
              </li>

              <li className="pl-4 pb-3 text-lg">
                <button className="sidebar-link" onClick={handleLogout}>
                  <i className="align-middle" data-feather="map"></i>{" "}
                  <span className="align-middle">Log out</span>
                </button>
              </li>
              <a className="" href="#">
                <span className="relative inline-block">
                  <svg
                    className="w-12 h-12 text-gray-700 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    4
                  </span>
                </span>
              </a>
            </ul>
          </div>
        </nav>
        <div className="main w-full">
          <nav className="navbar bg-white shadow-b-xl navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle">
              <i className="hamburger align-self-center"></i>
            </a>
          </nav>
          <main className="w-full">
            <div>{props.children}</div>
          </main>
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />
      </div>
    </>
  );
};

export default Dashboard;
