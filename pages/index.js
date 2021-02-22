import Layout from "../component/Layout";
import Image from "next/image";
import { image, lineH, Timg } from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <>
        <div style={{ marginBottom: "3%", fontSize: "1500%" }}>
          <h1 style={{ color: "#fff", fontSize: "10%" }}>What is SpaceX ?</h1>
          <div className={lineH}></div>
          <p style={{ color: "#fff", textIndent: "2rem" }}>
            Space Exploration Technologies Corp.SpaceX is an American aerospace
            manufacturer and space transportation services company. It was
            founded in 2002 by Elon Musk with the goal of reducing space
            transportation costs to enable the colonization of Mars. SpaceX has
            developed several launch vehicles and rocket engines, as well as the
            Dragon cargo spacecraft and the Starlink satellite constellation
          </p>
          <p style={{ color: "#fff", textIndent: "2rem" }}>
            SpaceX's achievements include{" "}
          </p>
          <ul style={{ color: "#fff" }}>
            <li>
              The first privately funded liquid-propellant rocket to reach orbit
              (Falcon 1 in 2008).
            </li>
            <li>
              The first private company to successfully launch, orbit, and
              recover a spacecraft.
            </li>
            <li>
              The first private company to send a spacecraft to The
              International Space Station (Dragon in 2012).
            </li>
            <li>
              The first vertical take-off and vertical propulsive landing for an
              orbital rocket (Falcon 9 in 2015).
            </li>
            <li>The first reuse of an orbital rocket (Falcon 9 in 2017).</li>
            <li>
              The first to launch a private spacecraft into orbit around the Sun
              (Falcon Heavy's payload of a Tesla Roadster in 2018).
            </li>
            <li>
              first private company to send astronauts to orbit and to the
              International Space Station (SpaceX Crew Dragon Demo-2 and SpaceX
              Crew-1 missions in 2020).
            </li>
          </ul>
          <p style={{ color: "#fff", textIndent: "2rem" }}>
            As of 1 February 2021, SpaceX has flown 21 cargo resupply missions
            to the ISS (International Space Station) under a partnership with
            NASA, as well as an uncrewed demonstration flight of the human-rated
            Dragon 2 spacecraft (Crew Dragon Demo-1) on 2 March 2019 , and two
            manned flights.
          </p>
        </div>
        <div className={Timg}>
          <Image
            src="/image/spaceXpic2.webp"
            width={500}
            height={375}
            className={image}
          />
          <Image
            src="/image/spaceXpic4.webp"
            width={500}
            height={375}
            className={image}
          />
        </div>
        <p style={{ marginBottom: "0.5%", color: "#fff", textAlign: "center" }}>
          SpaceX Headquarters: Hawthorne, California, U.S
        </p>
        <br />
      </>
    </Layout>
  );
}
