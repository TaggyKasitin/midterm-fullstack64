import { useRouter } from "next/router";
import {
  boxText,
  subText,
  failTask,
  img,
  boxImg,
  arrowLeft,
  goRocket,
  textBtn,
  video,
  boxVideo,
} from "../../styles/Detail.module.css";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Header = dynamic(import("../../component/Header"));
const TextDetails = dynamic(import("../../component/TextDetails"));
const Layout = dynamic(import("../../component/Layout"));

function LaunchesDetail({ launches }) {
  const router = useRouter();
  const date_time = (launches.launch_date_local + "").split("T")[0];
  return (
    <Layout>
      <span onClick={() => router.back()}>
        <i className={arrowLeft}></i>
      </span>
      <div className={boxImg}>
        <div className={img}>
          {launches.flight_number == 106 || launches.flight_number == 107 ? (
            launches.flight_number == 106 ? (
              <Image src="/miss106.png" layout="fill" />
            ) : (
              <Image src="/miss107.png" layout="fill" />
            )
          ) : launches.links.mission_patch_small == null ? (
            <Image src="/shuttle.png" layout="fill" />
          ) : (
            <Image src={launches.links?.mission_patch} layout="fill" />
          )}
        </div>
      </div>
      <Header titleText="Details" />

      <div className={boxText}>
        <TextDetails title="Mission name" text={launches.mission_name} />
        <TextDetails title="Date" text={date_time} />
        <TextDetails
          title="Rockets"
          text={`${launches.rocket.rocket_name}, Type ${launches.rocket.rocket_type}`}
        />
        <TextDetails title="Site" text={launches.launch_site.site_name} />
        {launches.details == null ? (
          ""
        ) : (
          <TextDetails title="Details" text={launches.details} />
        )}

        {launches.launch_success || launches.launch_success == null ? (
          ""
        ) : (
          <>
            <h1>
              Results:
              <span className={subText} style={{ color: "red" }}>
                &nbsp;False
              </span>
            </h1>
            <div className={failTask}>
              <h1>Failure detail</h1>
              <TextDetails
                title="Reason"
                text={launches.launch_failure_details?.reason || ""}
              />
              <TextDetails
                title="Altitude"
                text={launches.launch_failure_details?.altitude}
              />
              <TextDetails
                title="Times"
                text={launches.launch_failure_details?.time}
              />
            </div>
          </>
        )}
        <Link href={`/rockets/${launches.rocket.rocket_id}`}>
          <div className={goRocket}>
            <h1 className={textBtn}>Rocket Detail</h1>
          </div>
        </Link>
      </div>
      <Header titleText="Video" />
      <div className={boxVideo}>
        <div className={video}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${launches.links.youtube_id}`}
          ></iframe>
        </div>
      </div>
      <Header titleText="More Information" />
      <div className={boxText}>
        <h1>
          News:{" "}
          <a href={launches.links.article_link} className={subText}>
            Link space news
          </a>
        </h1>
        <h1>
          Wiki:{" "}
          <a href={launches.links.wikipedia} className={subText}>
            Wikipedia
          </a>
        </h1>
      </div>
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
