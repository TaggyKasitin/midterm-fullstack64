import { useState } from "react";

const rocket = ({ data, cost_hight }) => {
  const [name, setName] = useState("");
  // console.log(data);
  console.log(name);
  return (
    <>
      <input onChange={(e) => setName(e.target.value)} />
      {data.map((roc) => (
        <div key={roc.id}>
          <h1>{roc.rocket_name}</h1>
        </div>
      ))}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://api.spacexdata.com/v3/rockets`);
  const data = await res.json();
  const cost_hight = data.filter((da) => da.cost_per_launch > 7000000);

  return {
    props: {
      data,
      cost_hight,
    },
  };
}

export default rocket;
