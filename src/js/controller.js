import { getDefinition } from "./model.js";
import * as searchView from "./searchView.js";
import * as definitionView from "./definitionView.js";

const controlSearch = function () {
  // Get the query from the search bar
  const query = searchView.getQuery();

  // Update the hash in the URL (this will trigger the handler for hash change)
  window.location.hash = query;
};

const controlHashChange = async function () {
  // Get query for URL Hash
  const query = window.location.hash.slice(1);

  // If the query is empty, clear the definition view and the text input
  if (query === "") {
    definitionView.clearContainer();
    searchView.updateSearch("");
    return;
  }

  // Update search input to show the query in the hash
  searchView.updateSearch(query);

  // Get the definition from the API request in the model
  const definition = await getDefinition(query);

  // Render the definition
  definitionView.renderDefinition(definition);
};

const init = function () {
  searchView.addHandlerSearch(controlSearch);
  searchView.addHandlerHashChange(controlHashChange);
};
init();
