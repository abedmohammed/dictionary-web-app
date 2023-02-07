const fontBtn = document.querySelector("#font-btn");
const dropdownMenu = document.querySelector(".dropdown");

const addModalOverlay = function (e) {
  if (!e.target.closest("#font-btn") && !e.target.closest(".dropdown")) {
    hideDropdown();
  }
};

const changeFontStyle = function (e) {
  const fontStyle = e.target.dataset.fontStyle;

  if (!fontStyle) {
    return;
  }

  document.body.style.fontFamily = fontStyle;
  fontBtn.querySelector(".header__font").textContent = fontStyle
    .split(",")
    .pop()
    .trim();
  hideDropdown();
};

const showDropdown = function () {
  dropdownMenu.classList.add("dropdown--active");
  window.addEventListener("click", addModalOverlay);
  dropdownMenu.addEventListener("click", changeFontStyle);
};

const hideDropdown = function () {
  dropdownMenu.classList.remove("dropdown--active");
  window.removeEventListener("click", addModalOverlay);
  dropdownMenu.removeEventListener("click", changeFontStyle);
};

const addHandlerFontChange = function () {
  fontBtn.addEventListener("click", function (e) {
    if (!dropdownMenu.classList.contains("dropdown--active")) {
      showDropdown();
      return;
    }

    hideDropdown();
  });
};

export { addHandlerFontChange };
