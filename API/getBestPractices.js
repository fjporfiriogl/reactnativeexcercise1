const bestPractices = require("../assets/bestPractices.json");
import axios from "axios";

export const getBestPractices = async () => {
  try {
    const response = await axios.get(
      "https://mocki.io/v1/f188fbbe-2074-4f6e-9fea-f9a8a774c915"
    );
    const json = await response;
    return bestPractices;
  } catch (error) {
    console.error(error);
  }
};

const p = getBestPractices();
