<template>
  <div class="detail">
    <van-nav-bar
      title="实时监控"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="$router.push('/monitor/list')"
    >
      <van-icon name="notes-o" :size="24" slot="right" />
    </van-nav-bar>
    <p class="timer">
      <van-count-down
        ref="countDown"
        :time="time"
        format="ss"
        style="display:inline;"
        @finish="finished"
      />秒后刷新数据
    </p>
    <div class="header mt10">
      <van-row>
        <van-col span="8" class="van-hairline--right">
          <div class="p15">
            <GridNumber :num="213" unit="V" label="A相电压"></GridNumber>
          </div>
        </van-col>
        <van-col span="8" class="van-hairline--right">
          <div class="p15">
            <GridNumber :num="218" unit="V" label="B相电压"></GridNumber>
          </div>
        </van-col>
        <van-col span="8">
          <div class="p15">
            <GridNumber :num="215" unit="V" label="C相电压"></GridNumber>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="header mt10">
      <van-row>
        <van-col span="8" class="van-hairline--right">
          <div class="p15">
            <GridNumber :num="143" unit="A" label="A相电流"></GridNumber>
          </div>
        </van-col>
        <van-col span="8" class="van-hairline--right">
          <div class="p15">
            <GridNumber :num="132" unit="A" label="B相电流"></GridNumber>
          </div>
        </van-col>
        <van-col span="8">
          <div class="p15">
            <GridNumber :num="112" unit="A" label="C相电流"></GridNumber>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="header mt10">
      <van-row>
        <van-col span="12" class="van-hairline--right">
          <div class="p15">
            <GridNumber :num="1423" unit="kW" label="功率"></GridNumber>
          </div>
        </van-col>
        <van-col span="12">
          <div class="p15">
            <GridNumber :num="2132" unit="kW·h" label="用电量"></GridNumber>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="box">
      <van-tabs type="card">
        <van-tab title="功率（kW）">
          <ve-line
            :data="chartData"
            height="300px"
            :grid="grid"
            :colors="colors"
            style="margin-top:20px;"
          ></ve-line>
        </van-tab>
        <van-tab title="用电量（kW·h）">
          <ve-histogram
            :data="chartData"
            :grid="grid"
            height="300px"
            :colors="colors"
            style="margin-top:20px;"
          ></ve-histogram>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import GridNumber from "@/components/GridNumber";
export default {
  components: { GridNumber },
  data() {
    this.grid = { bottom: 10 };
    this.colors = ["#00e5ff"];
    return {
      time: 15 * 1000,
      chartData: {
        columns: ["时间", "功率"],
        rows: [
          { 时间: "0", 功率: 1393 },
          { 时间: "4", 功率: 3530 },
          { 时间: "8", 功率: 2923 },
          { 时间: "12", 功率: 1723 },
          { 时间: "16", 功率: 3792 },
          { 时间: "20", 功率: 4593 }
        ]
      },
      exChartData: {
        columns: ["时间", "电量"],
        rows: [{ 时间: "今日", 电量: 1393 }, { 时间: "昨日", 电量: 3230 }]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    finished() {
      this.$toast("数据已刷新");
      this.$refs.countDown.reset();
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.detail {
  .timer {
    font-size: 14px;
    text-align: center;
    line-height: 28px;
  }
  .header {
    background: #fff;
  }
}
</style>