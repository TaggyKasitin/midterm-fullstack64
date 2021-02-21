import { LaunchesConsumer } from "../contexts/LaunchesContext";
import {
  wrapper,
  inputData,
  inputBox,
  drop,
} from "../styles/Launches.module.css";

export default function Search() {
  return (
    <LaunchesConsumer>
      {(value) => {
        const { setName, setYarn, setLaunchSuc } = value;
        return (
          <div className={wrapper}>
            <div className={inputData}>
              <input
                type="text"
                className={inputBox}
                placeholder="Rocket Name"
              />
            </div>
            <div className={inputData}>
              <input
                type="number"
                className={inputBox}
                placeholder="Year ex. 2010"
              />
            </div>
            <select
              className={drop}
              onChange={(e) => setLaunchSuc(e.target.value)}
            >
              <option name="all" value="All">
                All
              </option>
              <option name="true" value="true">
                True
              </option>
              <option name="false" value="false">
                False
              </option>
            </select>
          </div>
          // <div>
          //   <label>Rocket Name</label>
          //   <input onChange={(e) => setName(e.target.value)} />
          //   <label>Year</label>
          //   <input onChange={(e) => setYarn(e.target.value)} />
          //   <select onChange={(e) => setLaunchSuc(e.target.value)}>
          //     <option name="all" value="All">
          //       All
          //     </option>
          //     <option name="true" value="true">
          //       True
          //     </option>
          //     <option name="false" value="false">
          //       False
          //     </option>
          //   </select>
          // </div>
        );
      }}
    </LaunchesConsumer>
  );
}
