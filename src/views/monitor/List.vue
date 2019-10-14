<template>
  <div class="list">
    <van-nav-bar title="历史数据查询" left-arrow @click-left="$router.go(-1)" @click-right="choose">
      <van-icon name="notes-o" :size="24" slot="right" />
    </van-nav-bar>
    <vue-good-table :columns="columns" :rows="rows" theme="black-rhino" />
    <van-pagination v-model="currentPage" :page-count="10" mode="simple" class="mt10" />
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
    return {
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
          label: "A相电压",
          field: "av",
          width: "60px"
        },
        {
          label: "B相电压",
          field: "bv",
          width: "60px"
        },
        {
          label: "C相电压",
          field: "cv",
          width: "60px"
        },
        {
          label: "A相电流",
          field: "aa",
          width: "60px"
        },
        {
          label: "B相电流",
          field: "ba",
          width: "60px"
        },
        {
          label: "C相电流",
          field: "ca",
          width: "60px"
        }
      ],
      rows: [
        {
          id: 1,
          time: "2019-09-12 11:22:33",
          av: 230,
          bv: 234,
          cv: 212,
          aa: 230,
          ba: 234,
          ca: 212
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
.list {
  .tb {
    font-size: 12px;
  }
  .text-center {
    text-align: center;
  }
}
</style>