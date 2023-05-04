import axios from "axios";

import { BACKEND_URL } from "../util/constants";

class Micromoment {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.type = data.type;
    this.time = data.time;
    this.description = data.description;
    this.tip = data.tip;
    this.example = data.example;
  }
}

Micromoment.getMicromoments = async () => {
  const result = await axios({
    method: "get",
    url: `${BACKEND_URL}micromoments`,
  });

  return result.data.map((json) => new Micromoment(json));
};

export default Micromoment;
