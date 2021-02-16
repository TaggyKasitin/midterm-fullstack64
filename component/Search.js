import { LaunchesConsumer } from "../contexts/LaunchesContext";

export default function Search() {
  return (
    <LaunchesConsumer>
      {(value) => {
        const { setName, setYarn, setLaunchSuc } = value;
        return (
          <div>
            <input onChange={(e) => setName(e.target.value)} />
            <input onChange={(e) => setYarn(e.target.value)} />
            <select onChange={(e) => setLaunchSuc(e.target.value)}>
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
        );
      }}
    </LaunchesConsumer>
  );
}
