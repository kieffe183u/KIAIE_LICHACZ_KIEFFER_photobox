import * as config from "./config.js";
import * as lightbox from "./lightbox.js";




export function display_lightbox( data ){
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
        <br>
        <form method="post" id="form">
                   <input class="pseudo" type="text"  maxlength="50" size="20" placeholder="pseudo" autofocus><br>
                   <input class="titre" type="text" maxlength="50" placeholder="titre" size="20" autofocus><br>
                   <textarea class="message" cols="62" rows="5" placeholder="Votre message" autofocus></textarea><br>
                   <input type="submit" id="reponse" value="Valider">
                 </form>
        
    <h2 class="title_com">Commentaire  : </h2>
    <div id='com'>
    </div>`
    let com = document.getElementById('com')
    com.innerHTML = data.commentaire.comments.reduce( (acc, elem) => {
        return acc + `
        <p class="titre"> ${elem.titre}</p>
        <p class ="pseudo">${elem.pseudo}</p>
        <p class ="date">${elem.date}</p>
        <p class = "content">${elem.content}</p><br>
        `
       
    }, )
    +`</div>`;
    
    const form = document.getElementById('reponse');
    form.addEventListener('click', function(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        let p = document.querySelector('.pseudo').value
        let t = document.querySelector('.titre').value
        let c = document.querySelector('.content').value
        const data = new FormData(this)
        let json_data = JSON.stringify({
            titre : t,
            pseudo : p,
            content : c,
            date : today
        })

        fetch( config.urlWebetu + data.photo.photo.links.comments , {
            method: 'POST',
            doby: json_data,
            credentials: 'include',
            headers:{
                'Content-Type': "application/json"
            }
        })



    })
    /*
    const express = require('express');
    const app = express();
    app.listen(3000, ()=> console.log('listening at 3000'));
    app.use(express.static('public'));

    app.post('/api', (request, response)=> {
        console.log(request);
    });
    */
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


