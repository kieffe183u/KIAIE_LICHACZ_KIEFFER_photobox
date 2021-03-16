import * as config from "./config.js";





export function display_lightbox( data ){
    console.log(data)
    let div = document.querySelector('#lightbox_container')
    div.innerHTML = `<div id="lightbox">
    <div id="lightbox-head">
        <p id="lightbox_close">X</p>
        <h1 id="lightbox_title">${data.photo.titre}</h1>
    </div>

    <div id="lightbox-img">
        <img id="lightbox_full_img" src="${config.urlWebetu + data.photo.url.href}">
        <h2 class="title_desc">Description : </h2>
        <p class="description"> ${data.photo.descr}</p>
    </div>

</div>`;
show();

document.getElementById('lightbox_close').addEventListener('click', e=>{
    console.log('bitch');
    hide()
  })


}



export function show(){
    document.getElementById('lightbox_container').className = 'lightbox_container lightbox_container--visible';

}

export function hide(){
    document.getElementById('lightbox_container').className = 'lightbox_container lightbox_container--hidden';
}


