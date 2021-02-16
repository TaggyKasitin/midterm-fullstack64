import { useState } from "react";

const rocket = ({ data }) => {
  const [name, setName] = useState("");
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

  return {
    props: {
      data,
      cost_hight,
    },
  };
}

export default rocket;
