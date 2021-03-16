import * as config from "./config.js";
import * as lightbox from "./lightbox.js";
import * as lightbox_ui from "./lightbox_ui.js";


export function display_galerie(galerie) {
    
    let container = document.querySelector('#gallery_container');
    container.innerHTML = galerie.photos.reduce( (acc, elem) => {
       
        return acc + `
        <div class="vignette" >
            <img data-uri="${elem.links.self.href}"
            src="${config.urlWebetu + elem.photo.thumbnail.href}">
        </div>`
       
    }, '')

    container.querySelectorAll(".vignette").forEach(v=>{
        v.addEventListener('click', e=> {
            console.log(e.target.getAttribute('data-uri'))
            lightbox.loaded(e.target.getAttribute('data-uri')).then(lightbox_ui.display_lightbox);
        })
    })

}









