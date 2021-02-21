import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  card,
  box,
  cardBack,
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
  return (
    <div className={box} onClick={showBack ? close : open}>
      <div className={showBack ? hid : card}>
        {launch.flight_number == 106 || launch.flight_number == 107 ? (
          launch.flight_number == 106 ? (
            <Image src="/miss106.png" layout="fill" />
          ) : (
            <Image src="/miss107.png" layout="fill" />
          )
        ) : launch.links.mission_patch_small == null ? (
          <Image src="/shuttle.png" layout="fill" />
        ) : (
          <Image src={launch.links?.mission_patch_small} layout="fill" />
        )}
      </div>
      <div className={showBack ? cardBack : hid}>
        <h1 className={hText}>{launch?.mission_name}</h1>
        <p className={text}>
          {launch.details == null ? "No Detail. " : launch.details}
        </p>
        <Link href={`/launches/${launch.flight_number}`}>
          <button className={butLm}>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default LaunchesCard;
