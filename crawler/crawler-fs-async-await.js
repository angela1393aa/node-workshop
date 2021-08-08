const axios = require("axios");
const moment = require("moment");
const fs = require("fs");

function resultCode() {
  return new Promise((resolve, reject) => {
    fs.readFile("stock.txt", "utf8", function (err, stockCode) {
      if (err) {
        reject(err);
      } else {
        resolve(stockCode.trim()); //trim()移除空白字元
      }
    });
  });
}
function resultData(stockCode) {
  return axios.get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    params: {
      response: "json",
      date: moment().format("YYYYMMDD"),
      stockNo: stockCode,
    },
  });
}

async function getData() {
  try {
    let stockCode = await resultCode();
    let result = await resultData(stockCode);
    console.log(result.data);
  } catch (err) {
    console.log(err);
  }
}
getData();
