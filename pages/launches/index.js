import dynamic from "next/dynamic";
import LaunchesList from "../../component/LaunchesList";
const Layout = dynamic(import("../../component/Layout"));

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
