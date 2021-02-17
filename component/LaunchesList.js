import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLaunches } from "../contexts/LaunchesContext";
import Search from "./Search";

const LaunchesList = ({ Launches }) => {
  const { name, yarn, launchSuc } = useLaunches();
  const [page, setPage] = useState(1);
  const perPage = 20;
  let start = 0;
  let end = page * perPage;
  const ref = useRef();

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
      <ul>
        {launches.slice(start, end).map((launch) => (
          <Link
            key={launch.flight_number}
            href={`/launches/${launch.flight_number}`}
          >
            <li style={{ height: 200 }}>
              {launch.mission_name},{launch.rocket.rocket_name},{" "}
              {launch.flight_number}
            </li>
          </Link>
        ))}
      </ul>
      {launches.length > end ? (
        <h3 ref={ref}>Loading Posts...</h3>
      ) : (
        <Link href="/launches">
          <a>to the top</a>
        </Link>
      )}
    </>
  );
};

export default LaunchesList;
