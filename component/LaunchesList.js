import { useEffect, useRef, useState } from "react";
import { useLaunches } from "../contexts/LaunchesContext";
import LaunchesCard from "./LaunchesCard";
import Search from "./Search";
import { boxCard } from "../styles/Launches.module.css";

const LaunchesList = ({ Launches }) => {
  const { name, yarn, launchSuc } = useLaunches();
  const [page, setPage] = useState(1);
  const perPage = 20;
  let start = 0;
  const ref = useRef();
  let end = page * perPage;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // console.log(entry);

        if (entry.isIntersecting) {
          //do your actions here
          setPage(() => page + 1);
          //   console.log(page);
          //   console.log("It works!");
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
  }, [ref, page]);

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
      <h3 ref={ref}>Loading Posts...</h3>
    </>
  );
};

export default LaunchesList;
