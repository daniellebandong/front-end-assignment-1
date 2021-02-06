//First we need to create a get request to the api server
function getRequest(url){
    return fetch(url)
    .then(res => res.json())
    .then(result => result)
    
}

export {getRequest}