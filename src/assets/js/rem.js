// 此处的16跟上面的192对应，同样是倍数
const baseSize = 192;
// 设置根节点的font-size大小函数
function setRem() {
  // 375为设计稿页面宽度，如为750，把375改为750
  const scale = document.documentElement.clientWidth / 750;
  // 设置页面根节点字体大小
  console.log(scale);
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
}
// 初始化
setRem();
// 改变窗口大小时重新设置根节点的font-size大小
window.onresize = function () {
  setRem();
};
