import { API_URL } from "./config.js";

const definition = {
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

  console.log(defResponse);

  // Get word
  definition.word = defResponse.word;

  // Get phonetics
  defResponse.phonetics.forEach((el) => {
    if (el.text) definition.phonetic.text = el.text;
    if (el.audio) definition.phonetic.audioURL = el.audio;
  });

  // Get meanings
  definition.meanings = defResponse.meanings;

  return definition;
};
