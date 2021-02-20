import { useRouter } from "next/router";
import Layout from "../../component/Layout";
import {
  boxText,
  head,
  line,
  subText,
  failTask,
  video,
  title,
  img,
  boxImg,
  arrowLeft,
  goRocket,
  textBtn,
} from "../../styles/LaunchesDetail.module.css";
import Image from "next/image";
import Link from "next/link";

function LaunchesDetail({ launches }) {
  const router = useRouter();
  console.log(launches);
  const date_time = (launches.launch_date_local + "").split("T")[0];
  return (
    <Layout>
      <span onClick={() => router.back()}>
        <i className={arrowLeft}></i>
      </span>
      <div className={boxImg}>
        <div className={img}>
          <Image src={launches.links.mission_patch} layout="fill" />
        </div>
      </div>
      <div className={head}>
        <h1 className={title}>Detail</h1>
        <div className={line}></div>
      </div>

      <div className={boxText}>
        <h1>
          Mission name: <span className={subText}>{launches.mission_name}</span>
        </h1>
        <h1>
          Date: <span className={subText}>{date_time}</span>
        </h1>
        <h1>
          Rockets:{" "}
          <span className={subText}>
            {launches.rocket.rocket_name}, Type {launches.rocket.rocket_type}
          </span>
        </h1>
        <h1>
          Site:{" "}
          <span className={subText}>{launches.launch_site.site_name}</span>
        </h1>
        {launches.details == null ? (
          ""
        ) : (
          <h1>
            Details: <span className={subText}>{launches.details}</span>
          </h1>
        )}

        <h1>
          Results:{" "}
          <span style={{ textTransform: "capitalize" }} className={subText}>
            {launches.launch_success + ""}
          </span>
        </h1>

        {launches.launch_success ? (
          ""
        ) : (
          <div className={failTask}>
            <h1>Failure detail</h1>
            <h1>
              reason:{" "}
              <span className={subText}>
                {launches.launch_failure_details.reason}
              </span>
            </h1>
            <h1>
              Altitude:{" "}
              <span className={subText}>
                {launches.launch_failure_details.altitude}
              </span>
            </h1>
            <h1>
              Times:{" "}
              <span className={subText}>
                {launches.launch_failure_details.time}s
              </span>
            </h1>
          </div>
        )}
        <Link href={`/rockets/${launches.rocket.rocket_id}`}>
          <div className={goRocket}>
            <h1 className={textBtn}>Rocket Detail</h1>
          </div>
        </Link>
      </div>
      <div className={head}>
        <h1 className={title}>Video</h1>
        <div className={line}></div>
      </div>
      <div className={video}>
        <iframe
          width="80%"
          height="450"
          src={`https://www.youtube.com/embed/${launches.links.youtube_id}`}
        ></iframe>
      </div>
      <div className={head}>
        <h1 className={title}>More Information</h1>
        <div className={line}></div>
      </div>
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
