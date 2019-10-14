<template>
  <div class="electric">
    <van-nav-bar title="用电量历史数据" left-arrow @click-left="$router.go(-1)" @click-right="choose">
      <van-icon name="notes-o" :size="24" slot="right" />
    </van-nav-bar>
    <div class="box">
      <van-tabs type="card">
        <van-tab title="图表">
          <ve-line :data="chartData" height="300px" :grid="grid" :colors="colors" class="mt10"></ve-line>
        </van-tab>
        <van-tab title="数据">
          <vue-good-table :columns="columns" :rows="rows" theme="black-rhino" class="mt10" />
          <van-pagination v-model="currentPage" :page-count="10" mode="simple" class="mt10" />
        </van-tab>
      </van-tabs>
    </div>

    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        title="选择时间"
        type="date"
        @confirm="confirm"
        @cancel="cancel"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    this.grid = { bottom: 10 };
    this.colors = ["#00e5ff"];
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
        columns: ["时间", "用电量"],
        rows: [
          { 时间: "0", 用电量: 1393 },
          { 时间: "4", 用电量: 3530 },
          { 时间: "8", 用电量: 2923 },
          { 时间: "12", 用电量: 1723 },
          { 时间: "16", 用电量: 3792 },
          { 时间: "20", 用电量: 4593 }
        ]
      },
      exChartData: {
        columns: ["时间", "数量"],
        rows: [{ 时间: "今日", 数量: 1393 }, { 时间: "昨日", 数量: 3230 }]
      },
      show: false,
      currentDate: new Date(),
      currentPage: 1,
      columns: [
        {
          label: "时间",
          field: "time",
          width: "150px",
          tdClass: "tb"
        },
        {
          label: "用电量",
          field: "pw"
          //   width: "60px"
        }
      ],
      rows: [
        {
          id: 1,
          time: "2019-09-12 11:22:33",
          pw: 230
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    choose() {
      this.show = true;
    },
    confirm() {
      this.show = false;
    },
    cancel() {
      this.show = false;
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.electric {
}
</style>