import Image from "next/image";
import Link from "next/link";
import { card, box } from "../styles/Launches.module.css";

const LaunchesCard = ({ launch }) => {
  //   console.log(launch.links);
  return (
    <Link href={`/launches/${launch.flight_number}`}>
      <div className={box}>
        <h1>{launch.mission_name}</h1>
        {/* <div className={card}>
          <Image
            src={launch.links.mission_patch_small}
            //   width={250}
            //   height={250}
            layout="fill"
          />
        </div> */}
        {/* {launch.mission_name},{launch.rocket.rocket_name},{" "}
        {launch.flight_number} */}
      </div>
    </Link>
  );
};

export default LaunchesCard;
