import * as config from "./config.js";
import * as lightbox from "./lightbox.js";




export function display_lightbox( data ){
   console.log(data)
    let div = document.querySelector('#lightbox_container')
    div.innerHTML = `<div id="lightbox">
    <div id="lightbox-head">
        <p id="lightbox_close">X</p>
        <button id="prev-image">prev image </button>
        <button id="next-image">next image</button>
        <h1 id="lightbox_title">${data.photo.photo.titre}</h1>
    </div>

    <div id="lightbox-img">
        <img id="lightbox_full_img" src="${config.urlWebetu + data.photo.photo.url.href}">
        
    </div>

    <div id="lightbox-bottom">
    <h2 class="title_desc">Description : </h2>
        <p class="description"> ${data.photo.photo.descr}</p>
        
    <h2 class="title_com">Commentaire  : </h2>
    <div id='com'>
    </div>`
    let com = document.getElementById('com')
    com.innerHTML = data.commentaire.comments.reduce( (acc, elem) => {
        console.log(elem.titre)
       
        return acc + `<p class="titre"> ${elem.titre}</p>
        <p class ="pseudo">${elem.pseudo}</p>
        <p class ="date">${elem.date}</p>
        <p class = "content">${elem.content}</p><br>
        `
       
    }, )
    +
    `</div>`
    /*
     data.commentaire.comments.forEach(element => {
        
        //let com = getElementById('com');
        com.innerHTML +=  `<p class="titre"> ${element.titre}</p><br>
        <p class ="pseudo">${element.pseudo}</p><br>
        <p class ="date">${element.date}</p><br>
        <p class = "content">${element.content}</p><br>
        `
    })`
    */
;
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


