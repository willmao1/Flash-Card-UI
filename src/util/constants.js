const BACKEND_URL = getBackendURL();

function getBackendURL() {
  if (window.location.hostname.indexOf("localhost") !== -1) {
    return "http://localhost:4000/";
  } else {
    return ""; // TODO: Add Heroku app URL
  }
}

const TIME_FILTER_OPTIONS = [
  [0, 5],
  [6, 10],
  [11, 20],
  [21, Infinity],
];

const TYPES = ["Curiosity", "Connections", "Creating Value"];

export { BACKEND_URL, TIME_FILTER_OPTIONS, TYPES };
