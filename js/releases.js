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
            `            
            }
        }                
    }

    if($contentRelease.innerHTML === ""){
        $contentRelease.innerHTML = `
            <img src="media/not-found.jpg" class="image-not-found" />
        `
        /*<img src="media/not.png" class="image-not-found" /> 
        <img src="media/not-found-min.jpg" class="image-not-found" />*/
    }

}
$boxSearch.addEventListener("keyup", filtrar);

filtrar();
