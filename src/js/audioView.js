const playBtn = document.querySelector("#audio-btn");
const termContainer = document.querySelector(".term");

const addHandlerPlayBtn = function (handler) {
  termContainer.addEventListener("click", function (e) {
    if (!e.target.closest("#audio-btn")) return;
    handler();
  });
};

export { addHandlerPlayBtn };
