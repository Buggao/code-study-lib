import babel from "@rollup/plugin-babel";

export default {
  // 入口文件
  input: './src/index.js',
  // 打包目标配置
  output: {
    file: 'dist/vue.js',  //打包结果文件目标目录
    format: "umd",   //打包规范
    name: "Vueact",
    sourcemap: true,  // 开启映射关系
  },
  // 插件
  plugins: [
    // 默认寻找 .babelrc文件，并配置排除 node_modules 文件夹下的所有文件
    babel({
      exclude:"./node_modules/**"
    })
  ]
}