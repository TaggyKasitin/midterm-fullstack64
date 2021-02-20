import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  card,
  box,
  cardBack,
  innerBox,
  hid,
  text,
  butLm,
  hText,
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
        <Image src={launch.links.mission_patch_small} layout="fill" />
      </div>
      <div className={showBack ? cardBack : hid}>
        <h1 className={hText}>{launch.mission_name}</h1>
        <p className={text}>
          {launch.details == null ? "No Detail. " : launch.details}
        </p>
        <Link href={`/launches/${launch.flight_number}`}>
          <button className={butLm}>Learn More</button>
        </Link>
      </div>
      {/* {launch.mission_name},{launch.rocket.rocket_name},{" "}
        {launch.flight_number} */}
    </div>
  );
};

export default LaunchesCard;
