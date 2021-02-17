import Head from "next/head";
import Navbar from "./Nav";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Layout = (props) => (
  <div className={styles.container}>
    {/* <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
    <div  style={{marginTop: 10, marginLeft: 10, marginBottom: 0, justifyContent: "flex-start"}}>
      <Image
          src={"/spaceXlogo.png"}
          width={500}
          height={50}
          alt="Super Rocket"
        />
    </div>
    <Navbar />
    {props.children}
  </div>
);
export default Layout;
