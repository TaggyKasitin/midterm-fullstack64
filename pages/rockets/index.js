import Link from "next/link";
import Layout from "../../component/Layout";

const rocket = ({ data }) => {
  return (
    <Layout>
      {data.map((roc) => (
        <Link key={roc.rocket_id} href={`/rockets/${roc.rocket_id}`}>
          <div>
            <h1>{roc.rocket_name}</h1>
            <p>{roc.description}</p>
            <h4>Price : {roc.cost_per_launch}</h4>
          </div>
        </Link>
      ))}
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://api.spacexdata.com/v3/rockets`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default rocket;
