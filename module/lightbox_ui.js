import * as config from "./config.js";
import * as lightbox from "./lightbox.js";




export function display_lightbox( data ){
    let div = document.querySelector('#lightbox_container')
    div.innerHTML = `<div id="lightbox">
    <div id="lightbox-head">
        <p id="lightbox_close">X</p>
        <button id="prev-image">prev image </button>
        <button id="next-image">next image</button>
        <h1 id="lightbox_title">${data.photo.titre}</h1>
    </div>

    <div id="lightbox-img">
        <img id="lightbox_full_img" src="${config.urlWebetu + data.photo.url.href}">
        
    </div>

    <div id="lightbox-bottom">
    <h2 class="title_desc">Description : </h2>
        <p class="description"> ${data.photo.descr}</p>
    </div>

</div>`;
show();

document.getElementById('lightbox_close').addEventListener('click', e=>{
    hide()
  })

  document.getElementById('prev-image').addEventListener('click', e=>{
    lightbox.prev()
  })

  document.getElementById('next-image').addEventListener('click', e=>{
    lightbox.next()
  })




}



export function show(){
    document.getElementById('lightbox_container').className = 'lightbox_container lightbox_container--visible';

}

export function hide(){
    document.getElementById('lightbox_container').className = 'lightbox_container lightbox_container--hidden';
}


