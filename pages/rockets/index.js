import dynamic from "next/dynamic";
import Layout from "../../component/Layout";
const RocketCard = dynamic(import("../../component/RocketCard"));
const rocket = ({ data }) => {
  return (
    <Layout>
      <RocketCard rocket={data} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://api.spacexdata.com/v3/rockets`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default rocket;
