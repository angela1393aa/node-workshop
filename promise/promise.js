// 解決 callback hell==> 把 callback -> 改用 Promise
// Promise 是一個表示非同步運算的「最終」完成或失敗的物件。
//   最終成功
//   最終失敗
//   new Promise
// 物件： new Promise();
// 建構式一定要傳入一個函式，而且這個函式本身會有兩個參數resolve, reject
let doWork = function (job, timer, isOK) {
  return new Promise((resolve, reject) => {
    // 模擬一個非同步工作
    setTimeout(() => {
      let dt = new Date();
      if (isOK) {
        // 完成
        resolve(`完成工作: ${job} at ${dt.toISOString()}`);
      } else {
        // 失敗
        reject(`${job}失敗`);
      }
    }, timer);
  });
};
//pending
let job1 = doWork("刷牙", 3000, true);
job1.then(
  function (resolve) {
    console.log("第一個被呼叫", resolve); //result
  },
  function (reject) {
    console.log("第 2 個函式被呼叫了", reject); //error
    console.log(job1);
  }
);
//第一個被呼叫 完成工作: 刷牙 at 2021-08-06T09:34:27.270Z
