// const fs = require("fs");
// fs.readFile("stock.txt", "utf8", (err, data)=>{
// })
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");
let today = moment().format("YYYYMMDD");
new Promise((resolve, reject) => {
  fs.readFile("stock.txt", "utf-8", (error, stoke) => {
    if (error) {
      reject(error);
    } else {
      resolve(stoke);
    }
  });
})
  .then((stoke) => {
    return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
      params: {
        response: "json",
        date: today,
        stockNo: stoke,
      },
    });
  })
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });
