import { releases } from "../js/data.js";

const $boxSearch = document.querySelector("#bar-search");
const $contentRelease = document.querySelector("#content-releases");

const filtrar = () => {
  const texto = $boxSearch.value.toLowerCase();
  $contentRelease.innerHTML = "";

  for (let release of releases) {
    let $nombre = release.title.toLowerCase();

    if ($nombre.indexOf(texto) !== -1) {
      if (release.prhase === "H") {
        $contentRelease.innerHTML += `
          <figure class="releases-h" id="release">
            <img src="${release.image}" class="image-release-h" loading="lazy" atl="${release.title}" />
            <figcaption class="text-release">
                <h6>${release.title}</h6>
                <a href="${release.urlBeedoo}" target="_blank">Ver en Beedoo.</a>                        
            </figcaption>
          </figure>`;
      } else {
        $contentRelease.innerHTML += `
          <figure class="releases" id="release">
            <img src="${release.image}" class="image-release" loading="lazy" atl="${release.title}" />
            <figcaption class="text-release">
                <h6>${release.title}</h6>
                <a href="${release.urlBeedoo}" target="_blank">Ver en Beedoo.</a>
            </figcaption>
          </figure>`;
      }
    }
  }

  if ($contentRelease.innerHTML === "") {
    $contentRelease.innerHTML = `
      <img src="media/not-found.png" class="image-not-found" />`;
  }
};
$boxSearch.addEventListener("keyup", filtrar);

filtrar();
