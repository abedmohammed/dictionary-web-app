const fontBtn = document.querySelector("#font-btn");
const dropdownMenu = document.querySelector(".dropdown");

const addModalOverlay = function (e) {
  if (e.target.closest(".dropdown") === null) {
    hideDropdown();
  }
};

const showDropdown = function () {
  dropdownMenu.classList.add("dropdown--active");
  window.addEventListener("mousedown", addModalOverlay);
};

const hideDropdown = function () {
  dropdownMenu.classList.remove("dropdown--active");
  window.removeEventListener("mousedown", addModalOverlay);
};

const addHandlerFontChange = function () {
  fontBtn.addEventListener("click", function (e) {
    if (!dropdownMenu.classList.contains("dropdown--active")) {
      showDropdown();
      return;
    }

    if (e.target.dataset.fontStyle) {
      document.body.style.fontFamily = e.target.dataset.fontStyle;
      hideDropdown();
    }
  });
};

export { addHandlerFontChange };
