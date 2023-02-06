const themeToggle = document.querySelector("#theme-toggle");
const searchBar = document.querySelector(".search__field");

const addHandlerToggleTheme = function () {
  themeToggle.addEventListener("change", function () {
    if (themeToggle.checked) {
      changeThemeToDark();
      return;
    }

    if (!themeToggle.checked) {
      changeThemeToLight();
      return;
    }
  });
};

// SETTING DARK THEME
const changeThemeToDark = function () {
  document.body.style.color = "var(--color-white)";
  document.body.style.backgroundColor = "var(--color-black)";

  searchBar.style.backgroundColor = "var(--color-dark-gray-3)";
};

// SETTING LIGHT THEME
const changeThemeToLight = function () {
  document.body.style.color = "var(--color-dark-gray-2)";
  document.body.style.backgroundColor = "var(--color-white)";

  searchBar.style.backgroundColor = "var(--color-light-gray-1)";
};

export { addHandlerToggleTheme };
