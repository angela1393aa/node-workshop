const express = require("express");
const connection = require('./utils/db');
//處理cors問題
const cors = require("cors");
// 利用 express 建立了一個 express application
let app = express();
app.use(cors());
//使用
app.use(function (request, response, next) {
    console.log("中間鍵");
    next();//往下執行
  });
app.use(function (request, response, next) {
    console.log(req.method);
    next();
});

// HTTP Method: get, post, put, patch, delete
//路由router
app.get("/", function (request, response, next) {
  response.send("Hello");
});

app.get("/about", function (request, response, next) {
    response.send("About Us");
  });
//stock GET API
app.get("/stock", async function (request, response, next) {
  let result = await connection.queryAsync("SELECT * FROM stock");
  response.json(result);
});
app.get('/stock/:stockCode', async (req, res, next) => {
  let stockCode = req.params.stockCode;
  let results = await connection.queryAsync("SELECT * FROM stock_price WHERE stock_id = " + stockCode);
  res.json(results);
});

app.use((req, res) => {
  res.status(404).json({ message: "這個頁面不存在！" });
});
//啟動
app.listen(3000, async function () {
  //不用手動
  //await connection.connectAsync();
  console.log("我們的 web server 啟動了～");
});