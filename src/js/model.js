import { API_URL } from "./config.js";

export const definition = {
  word: "",
  phonetic: {
    text: "",
    audioURL: "",
  },
  meanings: [],
};

export let error = {};

export const getDefinition = async function (query) {
  try {
    // GET request for definition
    let defResponse = await fetch(`${API_URL}${query}`);

    // Extract object from json
    defResponse = await defResponse.json();

    // Array = success, Object = failure message
    if (!Array.isArray(defResponse)) {
      // Handle error and return error message
      error = defResponse;
      throw new Error(defResponse.title);
    }

    defResponse = defResponse[0];

    // Get word
    definition.word = defResponse.word;

    // set phonetics to empty
    definition.phonetic.text = "";
    definition.phonetic.audioURL = "";

    // Cycle through all the phonetic sources to get any value
    defResponse.phonetics.forEach((el) => {
      definition.phonetic.text = el.text || "";
      definition.phonetic.audioURL = el.audio || "";
    });

    // Get meanings
    definition.meanings = defResponse.meanings;
  } catch (err) {
    console.error(`ERROR IN MODEL 💥: ${err}`);
    throw err;
  }
};
