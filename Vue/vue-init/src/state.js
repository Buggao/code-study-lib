import observe from "./observe/index";

export default function initState(vm) {
  //读取配置信息
  const options = vm.$options

  //判断options中包含的数据, 包含data则调用处理data的函数
  if(options.data) {
    initData(vm);
  }
}

//处理data类型
function initData(vm) {
  let data = vm.$options.data;
  //如果 data是函数则拿函数的返回值，如果是object，直接使用
  data = typeof data === "function" ? data.call(vm) : data;
  //调用产生响应式的函数
  observe(data);
}