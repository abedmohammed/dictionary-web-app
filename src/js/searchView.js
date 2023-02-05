const searchField = document.querySelector("#search-field");
const searchForm = document.querySelector("#search-form");

const getQuery = function () {
  const query = searchField.value;

  if (query === "") {
    searchField.classList.add("search__field--empty");
    return;
  }
  searchField.classList.remove("search__field--empty");

  return query;
};

const addHandlerSearch = function (handler) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    handler();
  });
};

export { getQuery, addHandlerSearch };
