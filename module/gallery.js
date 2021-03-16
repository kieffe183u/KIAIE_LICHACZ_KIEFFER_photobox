import * as photoloader from "./photoloader.js";
import * as config from './config.js'


var url = '/www/canals5/photobox/photos';
var promesse;
var obj;



export function load(){
    promesse = photoloader.loadRessource(config.urlWebetu + url);
    promesse.then(value => {
        obj = value;
    })
    return promesse;
}


export function next(){
    url = obj.links.next.href;
}


export function prev(){
    url = obj.links.prev.href;
}

export function first(){
    url = obj.links.first.href;
}


export function last(){
    url = obj.links.last.href;
}
