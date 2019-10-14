<template>
  <div class="monitor">
    <van-nav-bar title="设备监控" />
    <div class="box">
      <van-divider>加热炉车间</van-divider>
      <h4>产污设施监测点（4处）</h4>
      <van-cell-group>
        <van-cell title="压板机" label="MN:12345678" is-link to="/monitor/detail">
          <van-tag type="success">在线</van-tag>
        </van-cell>
        <van-cell title="压板机" label="MN:12345678" is-link to="/monitor/detail">
          <van-tag type="danger">失联</van-tag>
        </van-cell>
      </van-cell-group>
      <h4>治污设施监测点（1处）</h4>
      <van-cell-group>
        <van-cell title="光氧" value="在线" label="MN:12345678" is-link to="/monitor/detail">
          <van-tag type="danger">失联</van-tag>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="box mt10">
      <van-divider>加热炉车间</van-divider>
      <h4>产污设施监测点（4处）</h4>
      <van-cell-group>
        <van-cell title="压板机" label="MN:12345678" is-link to="/monitor/detail">
          <van-tag type="success">在线</van-tag>
        </van-cell>
        <van-cell title="压板机" label="MN:12345678" is-link to="/monitor/detail">
          <van-tag type="danger">失联</van-tag>
        </van-cell>
      </van-cell-group>
      <h4>治污设施监测点（1处）</h4>
      <van-cell-group>
        <van-cell title="光氧" value="在线" label="MN:12345678" is-link to="/monitor/detail">
          <van-tag type="danger">失联</van-tag>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeNames: "1"
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.monitor {
  h3 {
    font-size: 16px;
  }
  h4 {
    padding: 15px 0px;
    color: #006064;
    font-size: 14px;
  }
}
</style>