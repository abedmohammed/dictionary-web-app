import * as model from "./model.js";
import * as searchView from "./searchView.js";
import * as definitionView from "./definitionView.js";
import * as audioView from "./audioView.js";
import * as themeView from "./themeView.js";
import * as fontView from "./fontView.js";

const controlSearch = function () {
  // Get the query from the search bar
  const query = searchView.getQuery();

  // Update the hash in the URL (this will trigger the handler for hash change)
  window.location.hash = query;
};

const controlHashChange = async function () {
  try {
    // Get query for URL Hash
    const query = decodeURI(window.location.hash.slice(1));

    // If the query is empty, clear the definition view and the text input
    if (query === "") {
      definitionView.clearContainer();
      searchView.updateSearch("");
      return;
    }

    // Update search input to show the query in the hash
    searchView.updateSearch(query);

    // Get the definition from the API request in the model
    await model.getDefinition(query);

    // Render the definition
    definitionView.renderDefinition(model.definition);
  } catch (err) {
    definitionView.renderError(model.error);
    console.error(`ERROR IN CONTROLLER 💥: ${err}`);
  }
};

const controlAudio = function () {
  new Audio(model.definition.phonetic.audioURL).play();
};

const controlChangeTheme = function () {
  if (themeView.isToggleChecked()) {
    themeView.changeThemeToDark();
    return;
  }
  themeView.changeThemeToLight();
};

const controlSetTheme = function () {
  // Check local storage
  const localStorageTheme = localStorage.getItem("md-theme");

  if (localStorageTheme !== null && localStorageTheme === "dark") {
    themeView.changeThemeToDark();
    return;
  }

  if (localStorageTheme !== null && localStorageTheme === "light") {
    themeView.changeThemeToLight();
    return;
  }

  // Get system theme
  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  darkThemeMq.matches
    ? themeView.changeThemeToDark()
    : themeView.changeThemeToLight();
};

const init = function () {
  searchView.addHandlerSearch(controlSearch);
  searchView.addHandlerHashChange(controlHashChange);
  audioView.addHandlerPlayBtn(controlAudio);
  themeView.addHandlerToggleTheme(controlChangeTheme);
  themeView.addHandlerSetTheme(controlSetTheme);
  fontView.addHandlerFontChange();
};
init();
