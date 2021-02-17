import Head from "next/head";
import Navbar from "./Nav";
import styles from "../styles/Home.module.css";

const Layout = (props) => (
  <div className={styles.container}>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    {props.children}
  </div>
);
export default Layout;
