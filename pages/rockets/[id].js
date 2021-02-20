import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../component/Layout";
const rocketDetail = ({ rocket }) => {
  const router = useRouter();
  console.log(rocket);
  return (
    <Layout>
      <h1>{rocket.rocket_name}</h1>
      <h2>{rocket.cost_per_launch}</h2>
      <Image
        src={rocket.flickr_images[0]}
        width={800}
        height={600}
        alt="Super Rocket"
      />
      <p>{rocket.description}</p>
      <a href={rocket.wikipedia} target="_blank">
        wikipedia
      </a>
      <br />
      <span onClick={() => router.back()}>Click go back</span>
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
