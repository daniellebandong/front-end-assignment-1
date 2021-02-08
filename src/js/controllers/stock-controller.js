import {stockView} from '../views/resultsView.js'
import {setStocks} from '../models/stock-model.js'
import {generateMarkup} from '../utils/generateMarkup.js';
import {stringToElement} from '../utils/stringToElement.js'
function createStockView(data){
    setStocks(data)
    const items = createElements(data);
    return createElements(items);
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
export default createStockView