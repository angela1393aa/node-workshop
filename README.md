# 練習NodeJS的專案
###### tags:`資策會-前端工程師就業養成班` `NodeJS`
## 介紹專案：
這個專案是我用來練習NodeJS的專案，會說明怎麼安裝及使用

## 安裝方法：

二選一，推薦先試試看 nvm，nvm 是Node.js 的版本管理器(version manager)

1. 直接安裝 node
[下載連結](https://nodejs.org/zh-tw/download/) 

1. nvm: node version manager
[windows下載連結](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)

![](https://i.imgur.com/Ix1Tqsk.png)


```bash=
# 確認目前執行的版本
$ nvm -v
## mac版本
v0.38.0
## windows版本
v1.1.7
```

```bash=
# 列出可以安裝的版本
## mac版本
$ nvm ls-remote 14
## windows版本
$ nvm list available

# 安裝最新版本號
$ nvm install 14.17.4
$ nvm install 14.17.0

# 切換要使用的 node 版本
$ nvm use 14.17.4

# 確認目前執行的版本
$ node -v
## mac版本
v14.17.4
## windows版本
v14.17.4

# 列出你目前主機安裝的版本
## mac版本
$ nvm ls
## windows版本
$ nvm list 

# 設定預設的版本
$ nvm alias default 14.17.4
```


---
## 課程內容：
### NodeJS 
- [x] 可以讓我們脫離瀏覽器、在伺服器端執行 JS 程式語言的一個環境
- [x] NodeJS是以Chrome的v8引擎為核心
 Ryan JS (V8)特色:（面試必考題）
  - 單執行緒thread
  - 非阻塞
  - 非同步IO讀寫
  - event loop

JS的執行環境有：
* 瀏覽器
* NodeJS=>可以讓你脫離瀏覽器執行 JS

![](https://i.imgur.com/JcXqMC2.png)
* 瀏覽器提供的物件及方法：
document, window, location, 
setTimeout, setInterval
* NodeJS跟瀏覽器都有提供的物件及方法：
console.log, setTimeout, setInterval


---

### [php node.js 比較](https://kknews.cc/code/al3yaan.html)
#### 執行模式
PHP 採用阻塞執行的模型，当你執行一个指令，必须等这个指令執行完成后，才會執行下面的内容。</br>
Node.js 採用非阻塞執行的模型，通常不会等的，你需要提供一个回调函数，这個函数當指令執行完後會被调用一次。

#### 在性能方面
* node.js 是一個 單執行緒(single thread) 的程式語言 -> 一個人在工作
只有一個 process (只有一個 thread*)
* PHP 相反 => 多行程(multi-process) -> 多人在工作
會有很多個 process


誰比較快？
- 在小壓力的情況下：沒太多差別
    - apache + php 會一直開新的 process
    - node 永遠只有一個，但 CPU 一直飆高
- 在大壓力的情況下:
    - apache + php => 開到太多就 crash碰撞? => 有 58 個请求失败(request failed)
    - node: 沒有任何请求失败(request failed)，而且表現數據比小壓力還好

所謂的性能比較，不同情境下，可能會有截然不同的結果，依照我們上述測試，NodeJS 比較快</br>
php 開這麼多 process，為什麼還比較慢？ => content switch 的成本、記憶體的資源</br>
node 單執行緒 => 先用完 CPU
  - 缺點：無法善用多核心

PHP 容錯能力比較強大</br>
node single-thread 一但發生讓這個 thread 中止執行的錯誤時，可能整個 server 就掰掰了

---
### [Operating System Concepts 作業系統(恐龍書)](https://drive.google.com/drive/folders/1wz1LctMmE4IlXWii6730f9RVkaGZj5fz)
#### 執行緒(thread)
執行緒(thread) 是 OS 能夠進行運算排程的最小單位，它被包含在 process 之中，是 process 中的實際運作單位。
#### 行程(Process)
行程(Process)是電腦中執行中的程式(program)。現代面向執行緒設計的系統中，行程(process)本身不是基本執行單位，而是執行緒(thread)的容器。 行程需要一些資源才能完成工作，如CPU使用時間、記憶體、檔案以及I/O裝置。
* thread 是 OS 分配 CPU 時間的對象。
* process 是 OS 分配資源的對象。

#### content switch
![](https://i.imgur.com/4TisICj.png)

#### 排程演算法
• FIFO: First come first out 不可插隊的。</br>
• SJF: Shortest Job First 短時任務先做，可插隊的。</br>
• SRJF: Shortest Remaining Time Job First 可插隊的。</br>
• Priority Scheduling</br>
• RR: Round Robin</br>
[老師的講義](https://drive.google.com/drive/folders/1wz1LctMmE4IlXWii6730f9RVkaGZj5fz)
![](https://i.imgur.com/ZzYf80g.png)
![](https://i.imgur.com/YNQjJkG.png)
![](https://i.imgur.com/TjcWw7K.png)
![](https://i.imgur.com/uixoiwk.png)
![](https://i.imgur.com/At1tNS6.png)
![](https://i.imgur.com/56EX4BM.png)
![](https://i.imgur.com/VN2ooyl.png)
![](https://i.imgur.com/JOeZwEY.png)
![](https://i.imgur.com/cHcnaZl.png)
![](https://i.imgur.com/fIayqjp.png)

---
### [矽谷牛的耕田筆記](https://www.facebook.com/technologynoteniu/posts/339605564540249)
作者想要分享這十多年的工作經驗中，從那些聰明人身上所學到的事情:

1. 好的解決方案勢必都要能夠針對時間，精力與成本這三個方面取得平衡。
例子：如果團隊中大家都會php較少有人會node.js，但這個專案比較適合用node.js來寫，你會選擇用php還是node.js來寫?如果針對時間，精力與成本來考量的話會建議用php來寫比較適合。
3. 作者認為只要能夠用正確的方式去面對，技術債身上也可以有值得學習的機會，因為大部分的技術債，都是因為時間與人力不足下進行取捨所造成的結果。
4. 「會問問題的人會當傻子五分鐘，但是不問問題人的人則是一生傻子」
 有問題就使勁地去發問，有效率與聰明的工作相對容易讓你被人記住還有給人留下好印象。
1. 能夠透過溝通來清楚描述想法的能力可謂是一個不可或缺的技能。
1. 如何於有效的時間內帶來最大的效益也是一個不可或缺的技能。
1. 學會分享也同時藉由分享讓整體團隊一起成長。


---
### [JS 觀念](https://reurl.cc/7rAGbd)
* Scope 作用域
Scope 作用域指的是變數在程式中可以被存取的範圍，可分為區域變數 跟 全域變數。

  1.  區域變數（Local Variable）</br>
在 function 內宣告的變數bc，只會在作用域內有效。</br>
function scope 裡的變數脫離他自己的 scope 會讀不到。
  1. 全域變數（Global Variable）</br>
而不在 function 內宣告的變數a，會被整個程式碼的任何部份給讀取到，也會被 function 讀到。</br>
![](https://i.imgur.com/aMc9rIX.png)
* Closure 閉包
閉包就是 Function 內的 Function</br>
閉包在 callback 上的應用尤其常見</br>
![](https://i.imgur.com/adUjKCY.png)
* Hoisting 提升
宣告本身會被提升至程式碼最上面，而賦值則留在原地</br>
Hoisting 的優先順序是：</br>
函式的宣告（function declaration ）>傳進函式的參數（argument object）>變數宣告（variable declaration）</br>
![](https://i.imgur.com/peVlTL4.png)

  * 那 let 跟 const 有 hoisting 嗎？
還是有 hoisting ，只是初始化行為跟 var 不同</br>
var: 變數會被初始化為 undefined</br>
let, const : 不會先被初始化，所以在賦值之前的 Temporal Dead Zone(TDZ, 時間死區) 取值會發生錯誤。
* prototype 原型
透過「原型」繼承可以讓本來沒有某個屬性的物件去存取其他物件的屬性。
* this
每一個 function 在被執行的時候都會有一個 reference 指向所屬的環境，這就是 this，有四種函數調用方法this 取決于執行這個 function 時的環境

```
/* In normal function calls */
a(); //  this 就是 window

/* Within methods on objects */
var obj = {};
obj.a = a;
obj.a(); // 這時 this 就是 obj

/* Within an object that has been constructed */
var b = new a();
// 這時 this 會是 a 這個 function 所產生的 object

/* A function invoked with .call, .apply, or bind */
a.call(obj);
// 這時 this 也是 obj
```
* Event loop
JS 是單執行緒，所有同步性的工作，瀏覽器會一個個執行處理工作stack，但遇到非同步的操作就請webapis幫忙處理工作，處理完會先放到一個叫做 task queue 的地方，等到瀏覽器目前沒有其他工作stack，就會到 task queue 看看有沒有還沒執行的任務，再把它拿出來執行。</br>
JS 的 array function 是已經幫你實作了 Stack / Queue
![](https://i.imgur.com/CDkxhLn.png)

  1. Stack 堆疊</br>
  堆疊(Stack) 是一種 後進先出 的資料結構。 </br>
  以日常生活例子就是疊盤子。先疊的會在下面，後疊的會在上面，當你要拿盤子一定先從最上面拿 (後疊的)</br>
  Last In First Out (LIFO): 後進先出，後疊的(後進)，先拿走(先出)。</br>
  Fisrt In Last Out (FILO): 先進後出，先疊的(先進)，最後拿走(後出)。</br>
  ![](https://i.imgur.com/Ok01P4f.png)</br>
把東西放進 stack 的尾巴(疊盤子) ==> push</br>
把東西從 stack 的尾巴拿出來(拿盤子) ==> pop</br>
  3. Queue 行列、隊伍</br>
  隊伍(Queue) 是一種 先進先出 的資料結構。 </br>
  以日常生活例子就是排隊，先來的會在前面，後來的會在後面。</br>
  Queue 的特性就是新增元素時發生在 Back後端，刪除元素時發生在 Front 前端。不像 Stack 新增刪除都是發生在頂端。</br>
![](https://i.imgur.com/kpMZTI8.png)</br>
 拿出 ==> shift</br>
 放進去 ==> unshift </br>
  * Priority Queue 優先級隊伍 </br>
優先級最高的會最提早獲得服務，例如：VIP 會員可以優先排隊進場、救護車優先於其他車輛等等</br>
![](https://i.imgur.com/fa5MSEG.png)

---
### XMLHttpRequest

XML Http Request瀏覽器提供的</br>
xml 是一種資料格式 (傳輸用的資料格式)
```xml=
<person>
    <name>ashley</name>
    <country>Taiwan</country>
    <email>ashleylai58@gmail.com</email>
    <github>https://github.com/azole/node-workshop</github>
</person>
```
JavaScript Object Notation(json) 
=> 把 json 當成資料格式來用
```json=
{
    "name": "ashley",
    "country": "Taiwan",
    "email": "ashleylai58@gmail.com",
    "github": "https://github.com/azole/node-workshop",
}
```

json 為什麼會大幅取代 xml?
- json 本來就是一個 object, js 原生可以處理，PHP 也都可以。
- json 比較小(不論資料，就論欄位名稱，XML 會是兩倍)


---
這兩天的學習心得：

因為老師的課在六日，我男朋友放假於是他也一起聽了一部分，我男朋友是後端的，我有問他在職訓局有沒有學過作業系統，他說沒有，看來也是死記不懂原理的部分，他說老師真的教得很好，慢慢帶著我們了解其中的原理，不是每個老師都會特別講解這部分的，拍拍手
老師真的教得很生動且很好理解，上課前還會先有個課後小測驗，來了解大家的吸收程度，再針對學生不解的地方做說明，我覺得很棒