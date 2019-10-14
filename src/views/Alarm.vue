<template>
  <div class="alarm">
    <van-nav-bar title="异常事件" />
    <van-steps direction="vertical" :active="0">
      <template v-for="n in 10">
        <van-step>
          <p class="ex-type">治污设施异常</p>
          <p>生产设施【总表】的基线功率为：220.0KW，每小时功率为：355379.97KW；治污设备【污水处理】的基线功率为：1100.0KW，每小时功率为：0.0KW，低于治污设备基线功率的5%，属于设备异常关闭,治污设备异常。</p>
          <p class="ex-time">2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <p class="ex-type">电流异常</p>
          <p>生产设施【锯床】的基线功率为：14666.7KW，每小时功率为：0.0KW；治污设备【光氧】的基线功率为：71.9339KW，每小时功率为：4.2KW，低于治污设备基线功率的30%，属于设备异常空转,治污设备异常</p>
          <p class="ex-time">2016-07-11 10:00</p>
        </van-step>
      </template>
    </van-steps>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.alarm {
  .ex-type {
    font-size: 16px;
    margin-bottom: 10px;
    color: #006064;
  }
  .ex-time {
    font-size: 12px;
    margin-top: 5px;
    text-align: right;
  }
}
</style>