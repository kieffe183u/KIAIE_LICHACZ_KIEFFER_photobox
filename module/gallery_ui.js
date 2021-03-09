import * as config from "./config.js";

export function display_galerie(galerie) {
    let container = document.querySelector('#gallery_container')
    container.innerHTML = galerie.photos.reduce( (acc, elem) => {
        return acc + `
        <div class="vignette" >
            <img data-uri="${elem.links.self.href}"
            src="${config.urlWebetu + elem.photo.thumbnail.href}">
        </div>`
    }, '')
}