<template>
  <div class="grid">
    <p class="num">
      {{num}}
      <span class="unit">{{unit}}</span>
    </p>
    <p class="label">{{label}}</p>
  </div>
</template>

<script>
export default {
  props: ["num", "unit", "label"],
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
.grid {
  text-align: center;
  .label {
    font-size: 14px;
    margin-top: 5px;
  }
  .unit {
    font-size: 10px;
  }
  .num {
    font-size: 20px;
  }
}
</style>