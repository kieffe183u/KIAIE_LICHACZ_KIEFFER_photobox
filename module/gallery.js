import * as photoloader from "./photoloader.js";
import * as config from './config.js'


var url = '/www/canals5/photobox/photos';

export function load(){
    return photoloader.loadRessource(config.urlWebetu +url);
}


export function next(next){
    url = next;
    load();
}


export function prev(prev){
    url = prev;
    load();
}
