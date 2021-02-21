import { subText } from "../styles/Detail.module.css";

const TextDetails = ({ title, text, boo }) => {
  return (
    <>
      <h1>
        {title}: <span className={subText}>{text}</span>
      </h1>
    </>
  );
};

export default TextDetails;
