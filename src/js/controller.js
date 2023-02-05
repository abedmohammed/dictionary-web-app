import { getDefinition } from "./model.js";
import * as searchView from "./searchView.js";

const controlSearch = async function () {
  const query = searchView.getQuery();
  const definition = await getDefinition(query);

  console.log(definition);
};

const init = function () {
  searchView.addHandlerSearch(controlSearch);
};
init();
