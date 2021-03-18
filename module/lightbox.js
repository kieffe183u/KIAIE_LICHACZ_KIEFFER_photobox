import * as photoloader from "./photoloader.js";
import * as config from './config.js'
import * as gallery from './gallery.js'
import * as gallery_ui from './gallery_ui.js'
import * as lightbox_ui from "./lightbox_ui.js";

let url;
let obj;
let promesse;

export function loaded(node){
   obj = node.parentNode;
   url = node.getAttribute('data-uri')
   return  photoloader.loadRessource(config.urlWebetu +'' +url);
 
}



export function next(){
   obj = obj.nextElementSibling;
   if(obj == null){
      gallery.next();
      gallery.load().then(gallery_ui.display_galerie);
      let container = document.querySelector('#gallery_container');
      obj = container.firstElementChild;
      obj = obj.getElementsByTagName('img')[0]
   }else{
      obj = obj.getElementsByTagName('img')[0]
   }
  loaded(obj).then(lightbox_ui.display_lightbox) 
}


export function prev(){
   obj = obj.previousElementSibling;
   if(obj == null){
      gallery.prev();
      gallery.load().then(gallery_ui.display_galerie);
      let container = document.querySelector('#gallery_container');
      obj = container.lastElementChild;
      obj = obj.getElementsByTagName('img')[0]
   }else{
      obj = obj.getElementsByTagName('img')[0]
   }
  loaded(obj).then(lightbox_ui.display_lightbox)  
}
