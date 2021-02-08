
import { getRequest } from "./utils/dataFetcher.js";
import {createStockView} from './controllers/stock-controller.js'
import addToDom from "./utils/addToDom.js";
window.addEventListener("load",function (e){
    document.querySelector("#makeRequest")
    .addEventListener("click", function(e){
        e.preventDefault();
        //user clicks the search button, need to grab the value of the input and put it into the stock input value
        const stockInputValue = document.querySelector("#searchTerm").value
        
        const getData = getRequest(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockInputValue}&apikey=Z5UA9W9K5MT3N397`
        );
        getData.then((result) =>{
            
            //if the input is empty
            if(stockInputValue === " "){
                document.querySelector("#error").style.display = "block";
                document.querySelector("#errorMessage").innerHTML = "Please enter a stock symbol";
                document.querySelector("#results").style.display = "none";
            }
            //if the result returns an empty array
            else if(JSON.stringify(result["Global Quote"]) === "{}"){
                document.querySelector("#error").style.display = "block";
                document.querySelector("#results").style.display = "none";
            }
            else{
                //hide error message
                document.querySelector("#error").style.display = "none";
                //create variables for information I want to display from the API
                let stockSymbol,
                    stockPrice,
                    stockDate,
                    stockChangeDollars,
                    stockChangePercent,
                    previousClose;
                stockSymbol = result["Global Quote"]["01. symbol"]
                stockPrice = result["Global Quote"]["05. price"]
                stockDate = result["Global Quote"]["07. latest trading day"]
                stockChangeDollars = result["Global Quote"]["09. change"]
                stockChangePercent = result["Global Quote"]["10. change percent"]
                previousClose = result["Global Quote"]["08. previous close"]
                //I was not able to figure out how to use views and controllers and then adding to the DOM so I used vanilla javascript to display the results, I know its not what you wanted but this was the only way I could figure out how to display the results
                document.querySelector("#results").style.display = "flex";
                document.querySelector("#symbol").innerHTML = stockSymbol;
                document.querySelector("#price").innerHTML ="$" + parseFloat(stockPrice).toFixed(2);
                document.querySelector("#date").innerHTML = stockDate;
                document.querySelector("#changeDollars").innerHTML = "$" + parseFloat(stockChangeDollars).toFixed(2);
                document.querySelector("#changePercent").innerHTML = stockChangePercent;
                document.querySelector("#previousClose").innerHTML ="$" + parseFloat(previousClose).toFixed(2) ;
            }           

           
        })

    })
})
