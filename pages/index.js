import Layout from "../component/Layout";
import styles, { card, box } from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <>
        <div style={{ marginBottom: "3%" }}>
          <h1 style={{ color: "#fff" }}>What is SpaceX ?</h1>
          <p style={{ color: "#fff", textIndent: "2rem" }}>
            Space ExplorationTechnologies Corp.SpaceX is an American aerospace
            manufacturer and space transportation services company. It was
            founded in 2002 by Elon Musk with the goal of reducing space
            transportation costs to enable the colonization of Mars. SpaceX has
            developed several launch vehicles and rocket engines, as well as the
            Dragon cargo spacecraft and the Starlink satellite constellation
          </p>
        </div>
        <div className={styles.frame_image}>
          <Image
            src="/spaceXpic2.jpg"
            width={450}
            height={320}
            className="image"
          />
          <Image
            src="/spaceXpic3.jpg"
            width={450}
            height={320}
            className="image"
          />
          <Image
            src="/spaceXpic4.jpg"
            width={450}
            height={320}
            className="image"
          />
        </div>
      </>
      <style jsx global>{`
        .image {
          border-radius: 10%;
          text-align: center;
        }
      `}</style>
    </Layout>
  );
}
