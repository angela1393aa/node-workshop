// const fs = require("fs");
// fs.readFile("stock.txt", "utf8", (err, data)=>{
// })
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");
let today = moment().format("YYYYMMDD");
fs.readFile("stock.txt", "utf8", (err, stock) => {
  axios
    .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      params: {
        response: "json",
        date: today,
        stockNo: stock,
      },
    })
    .then((response) => {
      console.log(response.data);
    });
});
// .catch(err =>{
//     console.log(err);
// })
