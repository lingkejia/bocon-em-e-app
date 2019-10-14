<template>
  <div>
    <div class="user-box mb10">
      <div>
        <div>
          <van-image round width="80" height="80" :src="require('@/assets/avatar.png')" />
          <p class="user-name">凌可佳</p>
        </div>
      </div>
    </div>
    <van-cell-group>
      <van-cell title="意见反馈" is-link />
      <van-cell title="系统版本" value="V1.0" />
      <van-cell title="版本更新" />
    </van-cell-group>
    <div class="p15">
      <van-button type="primary" round size="large">退出登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "@/assets/logo.png"
    };
  }
};
</script>

<style lang="less" scoped>
.user-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background: #006064;
  .user-name {
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    text-align: center;
  }
  .icon-user {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
}
</style>