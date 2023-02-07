const themeToggle = document.querySelector("#theme-toggle");
const searchBar = document.querySelector(".search__field");
const dropdownMenu = document.querySelector(".dropdown");

const addHandlerToggleTheme = function (handler) {
  themeToggle.addEventListener("change", function () {
    handler();
  });
};

const addHandlerSetTheme = function (handler) {
  window.addEventListener("load", function () {
    handler();
  });
};

const isToggleChecked = function () {
  return themeToggle.checked;
};

// SETTING DARK THEME
const changeThemeToDark = function () {
  themeToggle.checked = true;

  document.body.style.color = "var(--color-white)";
  document.body.style.backgroundColor = "var(--color-black)";

  searchBar.style.backgroundColor = "var(--color-dark-gray-3)";

  dropdownMenu.style.backgroundColor = "var(--color-dark-gray-3)";
  dropdownMenu.style.boxShadow = "0px 5px 30px var(--color-highlight)";

  localStorage.setItem("md-theme", "dark");
};

// SETTING LIGHT THEME
const changeThemeToLight = function () {
  themeToggle.checked = false;

  document.body.style.color = "var(--color-dark-gray-2)";
  document.body.style.backgroundColor = "var(--color-white)";

  searchBar.style.backgroundColor = "var(--color-light-gray-1)";

  dropdownMenu.style.backgroundColor = "var(--color-white)";
  dropdownMenu.style.boxShadow = "0px 5px 30px rgba(0, 0, 0, 0.1)";

  localStorage.setItem("md-theme", "light");
};

export {
  addHandlerToggleTheme,
  changeThemeToDark,
  changeThemeToLight,
  isToggleChecked,
  addHandlerSetTheme,
};
