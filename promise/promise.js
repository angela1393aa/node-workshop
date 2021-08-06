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
