import * as config from './config.js'

let url = config.urlApi;

export const loadRessource = function(uri) {
    return fetch(config.urlWebetu + uri, { credentials: 'include' })
        .then(response => {
            if (response.ok) return response.json()
            else console.log('response error : ' + response.status)
        })
        .catch(error => {
            console.log('network error : ' + error)
        })
}