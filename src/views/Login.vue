<template>
  <!-- <router-layout> -->
    <div class="login">
      <img src="@/assets/login-bg.png" width="100%" alt />
      <div class="mt15">
        <van-cell-group>
          <van-field v-model="username" label="账号" placeholder="请输入账号" />
          <van-field v-model="phone" label="密码" placeholder="请输入密码" type="password" />
          <van-field v-model="username" label="地址" placeholder="请输入服务器IP地址" />
          <van-field v-model="username" label="端口" placeholder="请输入服务器IP端口" />
        </van-cell-group>
        <div class="p15">
          <van-button round size="large" @click="login">登 录</van-button>
        </div>
      </div>
    </div>
  <!-- </router-layout> -->
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    login() {
      this.$router.push("/");
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.login {
}
</style>