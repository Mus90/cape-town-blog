import Head from "next/head";
import MyNavbar from "./MyNavbar";

const Layout = (props) => (
  <div className="page-layout">
    <Head>
      <title> I Cape Agency</title>
    </Head>
    <MyNavbar />
    {props.children}
    <style jsx global>
      {`
        body {
          margin-top: 20px;
        }
      `}
    </style>
  </div>
);

export default Layout;
