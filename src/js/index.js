import { getRequest } from "./utils/dataFetcher.js";
import {createStockView} from './controllers/stock-controller.js'
import addToDom from "./utils/addToDom.js";
window.addEventListener("load",function (e){
    document.querySelector("#makeRequest")
    .addEventListener("click", function(e){
        const stockInputValue = document.querySelector("#stockSymbol").value
        // VALIDATION HERE BEFORE GET REQUEST MAYBE?
        const getData = getRequest(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockInputValue}&apikey=Z5UA9W9K5MT3N397`
        );
        getData.then((result) =>{
            console.log(result)
            const stocks = createStockView(result)
            addToDom('.stock-display', stocks)
            console.log(stocks)

            let stockSymbol = document.querySelector("#symbol").value
            let stockPrice = document.querySelector("#currentPrice").value
            let stock = document.querySelector("#date").value
            result["Global Quote"]["01. symbol"]
            stockSymbol = result["Global Quote"]["01. symbol"]
            stockPrice = result["Global Quote"]["05. price"]
            stock = result["Global Quote"]["07. latest trading day"]
            //the other info i want to display is change in dollars and change in percent and the high
            console.log(stockSymbol)
            console.log(stockPrice)
            console.log(stock)
        })

    })
})
