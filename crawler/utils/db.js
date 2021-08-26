// ----------------------用POOL連線----------------------
const mysql = require("mysql");
require("dotenv").config();
// 這裡Promise大寫是為了取代原本的Promise
const Promise = require("bluebird");

// 設定連線資料
let connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //設定預設值
    connectionLimit: process.env.CONNECTION_LIMIT || 10, 
});

connection = Promise.promisifyAll(connection);
//兩種寫法
module.exports = connection;
//module.exports.connection = connection;