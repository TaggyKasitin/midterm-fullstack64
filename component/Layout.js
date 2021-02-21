import Head from "next/head";
import { container, main } from "../styles/Home.module.css";
import dynamic from "next/dynamic";
const Logo = dynamic(import("./Logo"));
const Navbar = dynamic(import("./Nav"));

const Layout = (props) => (
  <div className={container}>
    <Head>
      <title>Create Next App</title>
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Logo />
    <Navbar />
    <div className={main}>{props.children}</div>
  </div>
);
export default Layout;
