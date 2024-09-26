import ReactGA from "react-ga";

export const initGA = () => {
  ReactGA.initialize("G-7F96RCXPFD");
};

export const logEvent = (category = "", action = "", label = "") => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};
