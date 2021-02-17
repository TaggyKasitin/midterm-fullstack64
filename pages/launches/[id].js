import { useRouter } from "next/router";
import Layout from "../../component/Layout";

function LaunchesDetail({ launches }) {
  const router = useRouter();
  return (
    <Layout>
      <h1>{launches.mission_name}</h1>
      <span onClick={() => router.back()}>Click go back</span>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const launches = await res.json();
  const paths = launches.map((lau) => ({
    params: { id: lau.flight_number + "" },
  }));
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.spacexdata.com/v3/launches/${params.id}`
  );
  const launches = await res.json();

  return {
    props: { launches },
  };
}

export default LaunchesDetail;
