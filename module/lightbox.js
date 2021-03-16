import * as photoloader from "./photoloader.js";
import * as config from './config.js'


export function loaded(node){
   return photoloader.loadRessource(config.urlWebetu +'' +node);
}