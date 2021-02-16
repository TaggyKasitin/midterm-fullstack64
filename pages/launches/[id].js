import { useRouter } from "next/router";

function LaunchesDetail({ launches }) {
  const router = useRouter();
  return (
    <>
      <h1>{launches.mission_name}</h1>
      <span onClick={() => router.back()}>Click go back</span>
    </>
  );

  // Render post...
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

  // Pass post data to the page via props
  return {
    props: { launches },
    // Re-generate the post at most once per second
  };
}

export default LaunchesDetail;
