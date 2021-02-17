import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div>
      <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">
            <a>Main page</a>
          </Link>
        </li>
        <li className={router.pathname == "/launches" ? "active" : ""}>
          <Link href="/launches">
            <a>Launches</a>
          </Link>
        </li>
        <li className={router.pathname == "/rockets" ? "active" : ""}>
          <Link href="/rockets">
            <a>Rockets</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          background: #333;
          color: #fff;
          list-style: none;
          display: flex;
        }
        ul li {
          font-size: 18px;
          margin-right: 20px;
        }
        ul li a {
          color: #fff;
          text-decoration: none;
        }
        .active {
          background: #ff1100;
        }
      `}</style>
    </div>
  );
};
export default Navbar;
