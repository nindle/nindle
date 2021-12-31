<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
#app {
  height: 100vh;
  overflow: hidden !important;
}
/* .xue {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: url('./assets/images/bg-xuehua.png'), url('./assets/images/bg-xue.png');
  animation: 15s xue linear infinite;
}

@keyframes xue {
  0% {
    background-position: 0 0, 0 0;
  }

  100% {
    background-position: 500px 500px, 1000px 500px;
  }
} */
</style>
