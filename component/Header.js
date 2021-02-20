import { head, title, line } from "../styles/Detail.module.css";

const Header = ({ titleText }) => {
  return (
    <div className={head}>
      <h1 className={title}>{titleText}</h1>
      <div className={line}></div>
    </div>
  );
};

export default Header;
