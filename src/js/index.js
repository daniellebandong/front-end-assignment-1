import { getRequest } from "./utils/dataFetcher.js";

window.addEventListener("load",function (e){
    document.querySelector("#makeRequest")
    .addEventListener("click", function(e){
        const stockInputValue = document.querySelector("#stockSymbol").value
        const stockSymbol = document.querySelector("#symbol").value
        const stockPrice = document.querySelector("#currentPrice").value
        const stock = document.querySelector("#date").value
        const getData = getRequest(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockInputValue}&apikey=Z5UA9W9K5MT3N397`
        );
        getData.then((result) =>{
            data = result;
            console.log(data)   
            stockSymbol = data["Global Quote"]["01. symbol"]
            console.log(stockSymbol)   
        })

    })
})
