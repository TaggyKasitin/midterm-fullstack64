import Image from "next/image";
import Link from "next/link";
import {
  course,
  coursePre,
  courseInfo,
  boxCard,
  text,
  btn,
} from "../styles/Rocket.module.css";

const RocketCard = ({ rocket }) => {
  return (
    <>
      {rocket.map((roc) => (
        <div className={boxCard} key={roc.rocket_id}>
          <div className={course}>
            <div className={coursePre}>
              {roc.rocket_id == "falcon1" ? (
                <Image
                  src="/image/Falcon-1.webp"
                  layout="fill"
                  objectFit="cover"
                  alt="Falcon1"
                />
              ) : (
                <Image
                  src={roc.flickr_images[1]}
                  layout="fill"
                  objectFit="cover"
                  alt={roc.rocket_name}
                />
              )}
            </div>

            <div className={courseInfo}>
              <h2>{roc.rocket_name}</h2>
              <p className={text}>{roc.description}</p>
              <Link href={`/rockets/${roc.rocket_id}`}>
                <button className={btn}>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RocketCard;
