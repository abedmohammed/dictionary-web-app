const definitionContainer = document.querySelector("#term-container");

const generateMeanings = function (meanings) {
  const markup = meanings.map((meaning) => {
    const generateMeaningPoints = (definitions) => {
      let html = ``;
      definitions.forEach((def) => {
        html += `
          <li>
            <p class="meaning__point">
              ${def.definition}
              ${
                def.example
                  ? `<q class="meaning__example">${def.example}</q>`
                  : ""
              }
            </p>
          </li>
        `;
      });

      return html;
    };
    const generateSynonyms = (synonyms) => {
      if (synonyms.length === 0) return "";

      let html = `<div class="meaning__nyms">
      <h3 class="heading__tertiary">Synonyms</h3>`;
      synonyms.forEach((synonym) => {
        html += `<a class="meaning__link" href="#">${synonym}</a>`;
      });

      html += `</div>`;

      return html;
    };
    const generateAntonyms = (antonyms) => {
      if (antonyms.length === 0) return "";

      let html = `<div class="meaning__nyms">
      <h3 class="heading__tertiary">Antonyms</h3>`;
      antonyms.forEach((antonym) => {
        html += `<a class="meaning__link" href="#">${antonym}</a>`;
      });

      html += `</div>`;

      return html;
    };

    let html = `
    <div class="meaning">
      <h2 class="heading__secondary">${meaning.partOfSpeech}</h2>
      <h3 class="heading__tertiary">Meaning</h3>
      <ul class="meaning__list">
        ${generateMeaningPoints(meaning.definitions)}
      </ul>
      
        ${generateSynonyms(meaning.synonyms)}
        ${generateAntonyms(meaning.antonyms)}
      
    </div>
    `;

    return html;
  });
  return markup;
};

const generateDefinitionMarkup = function (definition) {
  const html = `
  <div class="term__header">
  <div>
      <h1 class="heading__primary">${definition.word}</h1>
      <p class="term__phonetic">${definition.phonetic.text}</p>
    </div>
    <button class="term__audio-btn">
      <img
        src="./assets/images/icon-play.svg"
        alt="Audio playback button"
      />
    </button>
  </div>

  ${generateMeanings(definition.meanings).join("")}

  <a target="_blank" href="https://en.wiktionary.org/wiki/${
    definition.word
  }" class="source"
    ><p class="source__text">Source</p>
    <span class="source__wiki"
      >https://en.wiktionary.org/wiki/${definition.word}</span
    >
    <img
      src="./assets/images/icon-new-window.svg"
      alt="Open wiki link"
      class="source__popup"
  />
  </a>
  `;

  return html;
};

const clearContainer = function () {
  definitionContainer.innerHTML = "";
};

const renderDefinition = function (definition) {
  const markup = generateDefinitionMarkup(definition);

  clearContainer();
  definitionContainer.insertAdjacentHTML("afterbegin", markup);
};

export { renderDefinition };
