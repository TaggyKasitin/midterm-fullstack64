import Image from "next/image";
import Link from "next/link";
import {
  bgWrap,
  text,
  boxText,
  box,
  textHead,
} from "../styles/Rocket.module.css";

const RocketCard = ({ rocket }) => {
  return (
    <>
      {rocket.map((roc) => (
        <Link key={roc.rocket_id} href={`/rockets/${roc.rocket_id}`}>
          <div className={box}>
            <div className={bgWrap}>
              <Image src={roc.flickr_images[1]} layout={"fill"} />
            </div>
            <div className={boxText}>
              <span className={textHead}>{roc.rocket_name}</span>
              <p className={text}>{roc.description}</p>
              {/* <button>Go</button> */}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default RocketCard;
