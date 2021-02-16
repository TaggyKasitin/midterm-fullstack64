import { useState, createContext, useContext } from "react";

const LaunchesContext = createContext();

export const LaunchesProvider = (props) => {
  const [name, setName] = useState("");
  const [yarn, setYarn] = useState(null);
  const [launchSuc, setLaunchSuc] = useState("All");

  return (
    <LaunchesContext.Provider
      value={{ name, setName, yarn, setYarn, launchSuc, setLaunchSuc }}
    >
      {props.children}
    </LaunchesContext.Provider>
  );
};

export const LaunchesConsumer = LaunchesContext.Consumer;

export const useLaunches = () => useContext(LaunchesContext);

export default LaunchesContext;
