import * as photoloader from "./photoloader.js";
import * as config from './config.js'
import * as gallery from './gallery.js'
import * as gallery_ui from './gallery_ui.js'
import * as lightbox_ui from "./lightbox_ui.js";

let url;
let obj;
let com;
let promesse;

export async function loaded(node){
   obj = node.parentNode;
   url = node.getAttribute('data-uri')
   promesse = await photoloader.loadRessource(config.urlWebetu + url).then(value => {
      return value;
  });

 
   let com = await photoloader.loadRessource(config.urlWebetu + promesse.links.comments.href).then(value => {
      return value;
   });
  
   let data = {
      photo : promesse,
      commentaire : com
   }
  
   return data
 
}



export async function next(){
   obj = obj.nextElementSibling;
   if(obj == null){
      gallery.next();
     await gallery.load().then(gallery_ui.display_galerie);
      let container = document.querySelector('#gallery_container');
      obj = container.firstElementChild;
      obj = obj.getElementsByTagName('img')[0]
   }else{
      obj = obj.getElementsByTagName('img')[0]
   }
  loaded(obj).then(lightbox_ui.display_lightbox) 
}


export  async function prev(){
   obj = obj.previousElementSibling;
   if(obj == null){
      gallery.prev();
     await gallery.load().then(gallery_ui.display_galerie);
      let container = document.querySelector('#gallery_container');
      obj = container.lastElementChild;
      obj = obj.getElementsByTagName('img')[0]
   }else{
      obj = obj.getElementsByTagName('img')[0]
   }
  loaded(obj).then(lightbox_ui.display_lightbox)  
}
