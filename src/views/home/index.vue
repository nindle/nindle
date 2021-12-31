<template>
  <div class="home">
    <div class="content">
      嵌套而来，原地址：
      <a href="https://vue3js.cn/interview/">https://vue3js.cn/interview/</a>
    </div>
    <iframe src="https://vue3js.cn/interview/" frameborder="no"></iframe>
  </div>
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
.content {
  text-align: center;
  font-weight: 700;
  font-size: 12px;
}
iframe {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
