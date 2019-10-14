<template>
  <router-layout id="__index">
    <router-view class="footer"></router-view>
    <van-tabbar v-model="active" slot="footer">
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/monitor">监控</van-tabbar-item>
      <van-tabbar-item icon="warn-o" replace to="/alarm">预警</van-tabbar-item>
      <van-tabbar-item icon="setting-o" replace to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </router-layout>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.footer {
  padding-bottom: 60px;
}
</style>