import { useState } from "react";
import Search from "../../component/Search";
import { useLaunches } from "../../contexts/LaunchesContext";
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
        <div key={launch.id}>
          <h1>{launch.mission_name}</h1>
        </div>
      ))}
    </>
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
