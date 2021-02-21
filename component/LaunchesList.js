import { useEffect, useRef, useState } from "react";
import { useLaunches } from "../contexts/LaunchesContext";
import { boxCard } from "../styles/Launches.module.css";
import { load, boxLoad } from "../styles/Launches.module.css";
import { line } from "../styles/Detail.module.css";
import dynamic from "next/dynamic";
const LaunchesCard = dynamic(import("./LaunchesCard"));
const Search = dynamic(import("./Search"));

const LaunchesList = ({ Launches }) => {
  const { name, yarn, launchSuc } = useLaunches();
  const [page, setPage] = useState(1);
  const perPage = 12;
  let start = 0;
  const ref = useRef();
  let end = page * perPage;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry);

        if (entry.isIntersecting && end < Launches.length) {
          //do your actions here
          setPage((page) => page + 1);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  const launches = Launches.filter((data) => {
    return (
      data.rocket.rocket_name.toLowerCase().includes(name.toLowerCase()) &&
      (yarn == null || yarn == "" ? true : data.launch_year == yarn) &&
      (launchSuc == "All"
        ? true
        : launchSuc == "true"
        ? data.launch_success == true
        : data.launch_success == false)
    );
  });

  return (
    <>
      <Search />
      <div className={boxCard}>
        {launches.slice(start, end).map((launch) => (
          <div key={launch.flight_number}>
            <LaunchesCard launch={launch} />
          </div>
        ))}
      </div>
      {launches.length > end ? (
        <div className={boxLoad} ref={end > 120 ? null : ref}>
          <div className={load}></div>
        </div>
      ) : (
        <div ref={null} style={{ margin: "45px 0" }} className={line}></div>
      )}
    </>
  );
};

export default LaunchesList;
