<template>
  <div class="home"><el-calendar v-model="value"></el-calendar></div>
</template>

<script>
export default {
  data() {
    return { value: new Date() };
  },
  mounted() {},
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
.home {
  width: 500px;
}
</style>
