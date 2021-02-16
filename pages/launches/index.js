import Search from "../../component/Search";
import { useLaunches } from "../../contexts/LaunchesContext";
import Link from "next/link";
const launches = ({ data }) => {
  const { name, yarn, launchSuc } = useLaunches();
  const launches = data.filter((data) => {
    return (
      data.mission_name.toLowerCase().includes(name.toLowerCase()) &&
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
      {launches.slice(0, 15).map((launch) => (
        <Link
          key={launch.flight_number}
          href={`/launches/${launch.flight_number}`}
        >
          <h1>{launch.mission_name}</h1>
        </Link>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://api.spacexdata.com/v3/launches/`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default launches;
