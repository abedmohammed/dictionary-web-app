import { API_URL } from "./config.js";

export const definition = {
  word: "",
  phonetic: {
    text: "",
    audioURL: "",
  },
  meanings: [],
};

export const getDefinition = async function (query) {
  let defResponse = await fetch(`${API_URL}${query}`);
  defResponse = await defResponse.json();
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

  return definition;
};
