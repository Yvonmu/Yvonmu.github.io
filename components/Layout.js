import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "80vh" }} className="bg-yellow-50">{props.children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
