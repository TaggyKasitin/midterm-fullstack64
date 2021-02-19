import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  card,
  box,
  cardBack,
  innerBox,
  hid,
} from "../styles/Launches.module.css";

const LaunchesCard = ({ launch }) => {
  const [showBack, setShowBack] = useState(false);
  const open = () => setShowBack(true);
  const close = (e) => {
    setShowBack(false);
  };

  console.log(showBack);
  return (
    <div className={box} onClick={showBack ? close : open}>
      <div className={showBack ? hid : card}>
        <Image
          src={launch.links.mission_patch_small}
          //   width={250}
          //   height={250}
          layout="fill"
        />
      </div>
      <div className={showBack ? cardBack : hid}>
        <h1>John Doe</h1>
        <p>Architect & Engineer</p>
        <p>We love that guy</p>
        <Link href={`/launches/${launch.flight_number}`}>
          <button>Detail</button>
        </Link>
      </div>
      {/* {launch.mission_name},{launch.rocket.rocket_name},{" "}
        {launch.flight_number} */}
    </div>
  );
};

export default LaunchesCard;
