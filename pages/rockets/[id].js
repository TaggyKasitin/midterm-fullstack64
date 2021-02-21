import { useRouter } from "next/router";
import Image from "next/image";
import {
  boxText,
  boxImg,
  imgSty,
  arrowLeft,
  rockHead,
} from "../../styles/Detail.module.css";
import dynamic from "next/dynamic";
const Header = dynamic(import("../../component/Header"));
const TextDetails = dynamic(import("../../component/TextDetails"));
const Layout = dynamic(import("../../component/Layout"));

const rocketDetail = ({ rocket }) => {
  const router = useRouter();
  function formatN(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <Layout>
      <span onClick={() => router.back()}>
        <i className={arrowLeft}></i>
      </span>
      <h1 className={rockHead}>{rocket.rocket_name}</h1>
      <Header titleText="Details" />
      <div className={boxText}>
        <TextDetails title="Rocket name" text={rocket.rocket_name} />
        <TextDetails title="Fast flight" text={rocket.first_flight} />
        <TextDetails title="Country" text={rocket.country} />
        <TextDetails
          title="Cost per launch"
          text={formatN(rocket.cost_per_launch)}
        />
        <TextDetails title="Active" boo={rocket.active} />
      </div>
      <Header titleText="Overview" />
      <div className={boxText}>
        <TextDetails title="Height" text={`${rocket.height.meters} Meters`} />
        <TextDetails
          title="Diameter"
          text={`${rocket.diameter.meters} Meters`}
        />
        <TextDetails
          title="Mass"
          text={`${formatN(rocket.mass.kg)} kilogram`}
        />
        {rocket.payload_weights.map((payload) => (
          <TextDetails
            title={`Payload to ${payload.id}`}
            text={`${formatN(payload.kg)} kilogram`}
          />
        ))}
      </div>
      <Header titleText="Photo" />
      <div className={boxImg}>
        {rocket.flickr_images.map((imgs) => (
          <div key={imgs} className={imgSty}>
            <Image src={imgs || ""} layout="fill" alt="Super Rocket" />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://api.spacexdata.com/v3/rockets");
  const rocket = await res.json();
  const paths = rocket.map((roc) => ({
    params: { id: roc.rocket_id + "" },
  }));
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.spacexdata.com/v3/rockets/${params.id}`);
  const rocket = await res.json();

  return {
    props: { rocket },
  };
}

export default rocketDetail;
