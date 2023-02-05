import { getDefinition } from "./model.js";
import * as searchView from "./searchView.js";
import * as definitionView from "./definitionView.js";

const controlSearch = async function () {
  const query = searchView.getQuery();
  const definition = await getDefinition(query);

  console.log(definition);
  definitionView.renderDefinition(definition);
};

const init = function () {
  searchView.addHandlerSearch(controlSearch);
};
init();
