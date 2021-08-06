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
async function doAllWorks() {
  let result1 = await doWork("刷牙", 3000, true);
  console.log(result1);
  let result2 = await doWork("吃早餐", 3000, true);
  console.log(result2);
  let result3 = await doWork("睡覺", 3000, true);
  console.log(result3);
}
doAllWorks();
// 完成工作: 刷牙 at 2021-08-06T09:25:09.442Z
// 完成工作: 吃早餐 at 2021-08-06T09:25:12.461Z
// 完成工作: 睡覺 at 2021-08-06T09:25:15.472Z
