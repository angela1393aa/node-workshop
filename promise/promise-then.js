let doWork = function (job, timer, isOK) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dt = new Date();
      if (isOK) {
        resolve(`完成工作: ${job} at ${dt.toISOString()}`);
      } else {
        reject(`${job}失敗`);
      }
    }, timer);
  });
};
//pending
let job1 = doWork("刷牙", 3000, true);
job1
  .then(function (resolve) {
    console.log("第一個被呼叫", resolve);
    return doWork("吃早餐", 5000, true);
  })
  .then(function (resolve) {
    console.log("第二個被呼叫", resolve);
    return doWork("睡覺", 5000, true);
  })
  .then(function (resolve) {
    console.log("第三個被呼叫", resolve);
  });
//   第一個被呼叫 完成工作: 刷牙 at 2021-08-06T09:32:09.694Z
//   第二個被呼叫 完成工作: 吃早餐 at 2021-08-06T09:32:14.710Z
//   第三個被呼叫 完成工作: 睡覺 at 2021-08-06T09:32:19.723Z
