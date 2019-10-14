<template>
  <div class="main">
    <van-nav-bar title="电智汇" />
    <div class="header">
      <van-row @click="$router.push('/monitor')">
        <van-col span="8">
          <div class="p15">
            <GridNumber :num="23" unit="处" label="监控点位"></GridNumber>
          </div>
        </van-col>
        <van-col span="8">
          <div class="p15">
            <GridNumber :num="18" unit="处" label="产污设施"></GridNumber>
          </div>
        </van-col>
        <van-col span="8">
          <div class="p15">
            <GridNumber :num="5" unit="处" label="治污设施"></GridNumber>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="box">
      <van-row type="flex" justify="space-between">
        <van-col span="8">
          <h5>功率（kW）</h5>
        </van-col>
        <van-col span="8" style="text-align:right">
          <van-button size="small" round @click="$router.push('/main/power')">查看数据</van-button>
        </van-col>
      </van-row>
      <ve-line :data="chartData" height="300px" :grid="grid" :colors="colors"></ve-line>
    </div>
    <div class="box">
      <van-row type="flex" justify="space-between">
        <van-col span="8">
          <h5>用电量（kW·h）</h5>
        </van-col>
        <van-col span="8" style="text-align:right">
          <van-button size="small" round @click="$router.push('/main/electric')">查看数据</van-button>
        </van-col>
      </van-row>
      <ve-histogram :data="chartData" :grid="grid" height="300px" :colors="colors"></ve-histogram>
    </div>
  </div>
</template>

<script>
import GridNumber from "@/components/GridNumber";
export default {
  components: { GridNumber },
  data() {
    this.grid = { bottom: 10 };
    this.colors = ["#e0e0e0", "#00e5ff"];
    this.chartExtend = {
      series(v) {
        v.forEach(i => {
          i.barWidth = 20;
        });
        return v;
      }
    };
    return {
      chartData: {
        columns: ["时间", "昨日", "今日"],
        rows: [
          { 时间: "0", 昨日: 1393, 今日: 1093 },
          { 时间: "4", 昨日: 3530, 今日: 3230 },
          { 时间: "8", 昨日: 2923, 今日: 2623 },
          { 时间: "12", 昨日: 1723, 今日: 1423 },
          { 时间: "16", 昨日: 3792, 今日: 3492 },
          { 时间: "20", 昨日: 4593, 今日: 4293 }
        ]
      },
      exChartData: {
        columns: ["时间", "数量"],
        rows: [{ 时间: "今日", 数量: 1393 }, { 时间: "昨日", 数量: 3230 }]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.main {
  .header {
    background: #00838f;
    color: #fff;
  }
}
</style>