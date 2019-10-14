<template>
  <!-- <div id="app">
    <router-view />
  </div>-->
  <vue-route-transition id="app" :keepAlive="true"></vue-route-transition>
</template>

<style lang="less">
body,
html {
  margin: 0;
  padding: 0;
  background: #f8f8f8;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0px;
  padding: 0px;
}
.m10 {
  margin: 10px;
}
.m15 {
  margin: 15px;
}
.mt10 {
  margin-top: 10px;
}
.mt15 {
  margin-top: 15px;
}
.mb10 {
  margin-bottom: 10px;
}
.mb15 {
  margin-bottom: 15px;
}
.ml10 {
  margin-left: 10px;
}
.ml15 {
  margin-left: 15px;
}
.mr10 {
  margin-right: 10px;
}
.mr15 {
  margin-right: 15px;
}
.p10 {
  padding: 10px;
}
.p15 {
  padding: 15px;
}
.pt10 {
  padding-top: 10px;
}
.pt15 {
  padding-top: 15px;
}
.pb10 {
  padding-bottom: 10px;
}
.pb15 {
  padding-bottom: 15px;
}
.pl10 {
  padding-left: 10px;
}
.pl15 {
  padding-left: 15px;
}
.pr10 {
  padding-right: 10px;
}
.pr15 {
  padding-right: 15px;
}
.box {
  padding: 15px;
  margin: 15px;
  background: #fff;
  border-radius: 5px;
}
.vue-route-transition-wrapper {
  background: #f8f8f8 !important;
}
</style>
