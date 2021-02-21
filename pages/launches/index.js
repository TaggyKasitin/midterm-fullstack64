import dynamic from "next/dynamic";
import Layout from "../../component/Layout";
const LaunchesList = dynamic(import("../../component/LaunchesList"));

const launches = ({ data }) => {
  return (
    <Layout>
      <LaunchesList Launches={data} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://api.spacexdata.com/v3/launches`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default launches;
