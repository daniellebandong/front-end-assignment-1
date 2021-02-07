let store = []
let once;

function setStocks(data){
    if(once === undefined){
        store = [...data]
        once = true
    }
}

function updateStocks(data){
    once = undefined
    setStocks(data)
}
function getStocks(){
    return store
}
export {setStocks, getStocks, updateStocks}