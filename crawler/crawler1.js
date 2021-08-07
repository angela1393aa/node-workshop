const axios = require("axios");
//日期
const moment = require("moment");
let today = moment().format("YYYYMMDD");
axios
  .get("https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
    params: {
      response: "json",
      date: today,
      stockNo: "2330",
    },
  })
  .then((response) => {
    console.log(response.data);
  });
