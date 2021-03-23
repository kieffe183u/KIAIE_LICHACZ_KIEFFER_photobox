import * as gallery from './gallery.js'
import * as gallery_ui from './gallery_ui.js'



document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    gallery.load().then(gallery_ui.display_galerie);
  })

document.querySelector('#previous').addEventListener('click', e=> {
    gallery.prev();
    gallery.load().then(gallery_ui.display_galerie);
})

document.querySelector('#next').addEventListener('click', e=> {
    gallery.next();
    gallery.load().then(gallery_ui.display_galerie);
})

document.querySelector('#first').addEventListener('click', e=> {
    gallery.first();
    gallery.load().then(gallery_ui.display_galerie);
})

document.querySelector('#last').addEventListener('click', e=> {
    gallery.last();
    gallery.load().then(gallery_ui.display_galerie);
})




