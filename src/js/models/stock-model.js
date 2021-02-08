let store =[]
let once;
 
// you can't do this with arrow functions
// arrow functions can't use the new key word.

function setStocks(data){
    if(once === undefined){
       store = [...data]
       once = true;
   }
}

function updateStocks(data){
    once = undefined;
    setStocks(data)
}
 
 function getStocks(){
     return store
 }

 export {getStocks,setStocks,updateStocks}