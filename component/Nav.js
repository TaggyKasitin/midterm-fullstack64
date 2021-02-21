import Link from "next/link";
import { useRouter } from "next/router";
import { menu, activeMenu, nav } from "../styles/Home.module.css";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={nav}>
      <Link href="/">
        <a className={router.pathname == "/" ? activeMenu : menu}>Main page</a>
      </Link>
      <Link href="/launches">
        <a className={router.pathname == "/launches" ? activeMenu : menu}>
          Launches
        </a>
      </Link>
      <Link href="/rockets">
        <a className={router.pathname == "/rockets" ? activeMenu : menu}>
          Rockets
        </a>
      </Link>
    </div>
  );
};
export default Navbar;
