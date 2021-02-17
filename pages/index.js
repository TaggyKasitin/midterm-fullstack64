import Link from "next/link";
import Layout from "../component/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h2>Home</h2>
        <Link href={"/rockets"}>Rockets</Link>
        <Link href={"/launches"}>Launches</Link>
      </main>
    </Layout>
  );
}
