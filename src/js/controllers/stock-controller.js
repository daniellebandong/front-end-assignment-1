import stockView from '../views/stockView.js'
import {setStocks} from '../models/stock-model.js'
import generateMarkup from '../utils/generateMarkup.js';
import stringToElement from '../utils/stringToElement.js'
function createStockView(data){
    setStocks(data)
    const items = createElements(data);
    return createElements(data);
}
function createElements(stocks){
    let items = []
    stocks.forEach(stock=>{
        const template = generateMarkup(stockView, stock)
        console.log(template)
        const element = stringToElement(template)
        items.push(element)
    })
    return items
}
export{createStockView}