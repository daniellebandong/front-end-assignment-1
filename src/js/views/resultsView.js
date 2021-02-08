
// const stockView = `
// <aside class="stock">
//   <header><h3 class="name"> Stock Details</h3></header>
   
//   <ul class="details" >
//   <li> Symbol: <span><%= stock.01. symbol %></span></li>
//   <li> Price:<span><%= stock.05. price %>Kg</span></li>
//   <li>Date: <span><%= stock.07. latest trading day %></span></li>
//   <li>Change($) <span><%= stock.09. change %></span></li>
//   <li>Change(%): <span><%= stock.10. change percent %></span></li>
//   <li>Close: <span><%= stock.08.previous close %></span></li>
//   </ul>

// </aside>
// `;
// const noResultsView = `
// <aside class="error">
//   <header>
//     <h3> There are no results matching this search</h3>
//  <header>
// </aside>
// `;
// export {stockView, noResultsView}
// // function ResultsView(viewID){
// //     this.container = document.querySelector(viewID);

// //     this.configUI = function(person){
// //         const elem = ejs.render(stockView, {stock});
// //         this.container.insertAdjancentHTML("afterbegin", elem)
// //     };
// //     this.renderStock = function(stock){
// //         this.removeChildElements()
// //             if(stock.results.length === 0){
// //                 const elem = ejs.render(noResultsView)
// //                 this.container.insertAdjancentHTML("afterbegin", elem)
// //             }
// //             if(stock.results.length !== 0){
// //                 people.results.forEach(person =>{
// //                     const elem = ejs.render(stockView, {stock:stock})
// //                     this.container.insertAdjancentHTML("afterbegin", elem)
// //                 })
// //             }
// //     }
// //     this.removeChildElements = function(){
// //         this.container.querySelectorAll('aside').forEach(item=>{
// //             this.container.removeChild(item)
// //         })
// //     }
// // }
// // export default ResultsView;