const axios = require("axios");
//日期
const moment = require("moment");
axios
  .get(
    "https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20210807&stockNo=2330",
    {
      params: {
        response: "json",
        date: moment().format("YYYYMMDD"),
        stockNo: "2330",
      },
    }
  )
  .then((response) => {
    console.log(result.data);
  });
