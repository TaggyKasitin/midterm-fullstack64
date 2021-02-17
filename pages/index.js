import Link from "next/link";
import Layout from "../component/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
      {/* <Image
          src={"/spaceXpic1.png"}
          width={50}
          height={50}
          alt="Super Rocket"
        /> */}
        <div style={{width: "100%", justifyContent: "center", display: "flex"}}>
          <img src="/spaceXpic1.png" style={{width: "40%", height: "40%", marginTop: "1%", marginLeft: 10}}/>
        </div>
        <div style={{marginLeft: "3%", marginBottom: "3%"}}>
          <h1 style={{color: "#003b80"}}>What is SpaceX ?</h1>
          <h3 style={{color: "#003b80"}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Space Exploration Technologies Corp. (SpaceX) is an American aerospace manufacturer
            and space transportation services company. It was founded in 2002 by Elon Musk with the
            goal of reducing space transportation costs to enable the colonization of Mars. SpaceX
            has developed several launch vehicles and rocket engines, as well as the Dragon cargo
            spacecraft and the Starlink satellite constellation</h3>
          {/* <h3 style={{marginTop: "2%", alignContent: "center", color: "#003b80"}}>
            "You want to wake up in the morning and think the future is going to be great — and that’s what being a spacefaring civilization is all about," Musk's mission statement for the company reads. "It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars."
          </h3> */}
        </div>
        <div>
          <img src="/spaceXpic2.jpg" style={{width: "30%", height: "30%", borderRadius: "10%", margin: "2%", display: "inline"}}/>
          <img src="/spaceXpic3.jpg" style={{width: "30%", height: "30%", borderRadius: "10%", margin: "2%", marginLeft: "1%", marginBottom: "3.5%", display: "inline"}}/>
          <img src="/spaceXpic4.jpg" style={{width: "30%", height: "30%", borderRadius: "10%", margin: "2%", marginLeft: "1%", display: "inline"}}/>
        </div>
      </main>
    </Layout>
  );
}
