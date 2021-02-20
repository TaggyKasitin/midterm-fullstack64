import { subText } from "../styles/Detail.module.css";

const TextDetails = ({ title, text, boo }) => {
  return (
    <>
      {boo == null ? (
        <h1>
          {title}: <span className={subText}>{text}</span>
        </h1>
      ) : (
        <h1>
          {title}:
          {boo ? (
            <span className={subText} style={{ color: "green" }}>
              &nbsp;True
            </span>
          ) : (
            <span className={subText} style={{ color: "red", textIndent: 50 }}>
              &nbsp;False
            </span>
          )}
        </h1>
      )}
    </>
  );
};

export default TextDetails;
