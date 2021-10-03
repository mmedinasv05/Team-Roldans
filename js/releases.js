import {releases} from '../js/data.js';

const $boxSearch = document.querySelector("#bar-search"),
$contentRelease = document.querySelector("#content-releases");

const filtrar = ()=>{
    const texto = $boxSearch.value.toLowerCase();
    $contentRelease.innerHTML = "";

    for(let release of releases){

        let $prhase = release.prhase.toLowerCase();
        let $nombre = release.title.toLowerCase();

        if($nombre.indexOf(texto) !== -1 || $prhase.indexOf(texto) !== -1){

            if(release.prhase === "H"){
                $contentRelease.innerHTML += `
                <figure class="releases-h" id="release">
                    <img src="${release.image}" class="image-release-h" loading="lazy" atl="${release.title}" />
                    <figcaption class="text-release">
                        <h6>${release.title}</h6>
                        <a href="${release.urlBeedoo}" target="_blank">Ver en Beedoo.</a>                        
                    </figcaption aption>
                </figure>
            `
            }else{
                $contentRelease.innerHTML += `
                <figure class="releases" id="release">
                    <img src="${release.image}" class="image-release" loading="lazy" atl="${release.title}" />
                    <figcaption class="text-release">
                        <h6>${release.title}</h6>
                        <a href="${release.urlBeedoo}" target="_blank">Ver en Beedoo.</a>

                        
                    </figcaption aption>
                </figure>



                <div class="modal fade" id="exampleModal${release.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                    ${release.title}
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul>
                                    <p class="p-item-release">${release.paso1}</>
                                    <li class="list-item-release">
                                        ${release.paso2}
                                    </li>
                                    <li class="list-item-release">
                                        ${release.paso3}
                                    </li>
                                    <li class="list-item-release">
                                        ${release.paso4}
                                    </li>
                                    <li class="list-item-release">
                                        ${release.paso5}
                                    </li>
                                    <li class="list-item-release">
                                        ${release.paso6}
                                    </li>
                                    <li class="list-item-release">
                                        ${release.paso7}
                                    </li>
                                    <li class="list-item-release">
                                        ${release.paso8}
                                    </li>
                                </ul>
                            </div>                            
                        </div>
                    </div>
                </div>
            `            
            }
            ``
        }                
    }

    if($contentRelease.innerHTML === ""){
        $contentRelease.innerHTML = `
            <img src="media/not-found.png" class="image-not-found" />
        `
        $contentRelease.classList.add("center-releases");
    }

}
$boxSearch.addEventListener("keyup", filtrar);

filtrar();
