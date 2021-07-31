# 練習NodeJS的專案
###### tags:`資策會-前端工程師就業養成班` `NodeJS`
## 介紹專案:
這個專案是我用來練習NodeJS的專案，會說明怎麼安裝及使用


### NodeJS 
可以讓我們脫離瀏覽器、在伺服器端執行 JS 程式語言的一個環境
JS的執行環境有：
* 瀏覽器
* NodeJS=>可以讓你脫離瀏覽器執行 JS
### 安裝方法：

二選一，推薦先試試看 nvm

1. 直接安裝 node
下載網址: https://nodejs.org/zh-tw/download/

1. nvm: node version manager
    - production v14
    - 想要測試 v16
windows:
https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows
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