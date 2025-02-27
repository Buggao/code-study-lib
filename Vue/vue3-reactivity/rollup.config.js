// 解析ts
import typescript from "rollup-plugin-typescript2";
// 解析第三方模块
import resolvePlugin from "@rollup/plugin-node-resolve";
// 处理路径
import path from "path";
// ESM模式下 自定义__dirname 和 __filename 所使用的api
import { fileURLToPath,pathToFileURL } from "url";
// 读取文件
import fs from "fs"

/**
 * 因为目前我使用ESM的模式构建，所以并没有__dirname这个cjs下的api
 * 所以使用node内部的api 构建__dirname
 * 其中 import.meta.url 返回当前文件的绝对路径
 * 而 fileURLToPath 的作用是将文件网址字符串或网址对象转化为node.js可用的文件路径
 * path.dirname 的作用是返回传入文件路径所在的目录
 * 
 * path.resolve 为node的一个api，用于生成绝对路径、
 * 通常则是将右边的参数一次加到左边的参数后，生成一个路径
 * 如果在处理完所有给定的 path 片段之后，还没有生成绝对路径，则使用当前工作目录。
 * __dirname为当前模块的目录名
 * 由于本文件运行在 vue3-reactivity的目录下，
 * 因此 __dirname就是 ../../vue3-reactivity
 * 而下面的代码的最终作用是获取 vue3-reactivity下的 packages
 * 以及每个package没个包对应的package
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); 

const packagesDir = path.resolve(__dirname, "packages");
// 获取打包的路径 npm run 的时候会传入TARGET
const packageDir = path.resolve(packagesDir, process.env.TARGET);
// 获取当前目录下的名字(传入路径的最后一个字符)
const name = path.basename(packageDir)
// 获取当前打包对象中的文件
const getCurrentFileName = (targetName) => path.resolve(packageDir, targetName);

const currentPackageJsonUrl = pathToFileURL(getCurrentFileName("package.json"));

// 获取当前打包目录下的 package.json 文件
const currentPackageJson = JSON.parse(fs.readFileSync(currentPackageJsonUrl))

// console.log("currentPackageJson",currentPackageJson)

const outputConfig = {
  "esm-bundler": {
    file: getCurrentFileName(`dist/${name}.esm-bundler.js`),
    format: "es"
  },
  "cjs": {
    file: getCurrentFileName(`dist/${name}.cjs.js`),
    format: "cjs"
  },
  "iife": {
    file: getCurrentFileName(`dist/${name}.global.js`),
    format: "iife" 
  },
}

function createConfig(format, output) {
  output.sourcemap = true,
  output.extend = true,
  output.name = name
  return  {
    //  入口文件
    input: getCurrentFileName("src/index.ts"),
    output,
    plugins: [
      typescript({
        tsconfig: path.resolve(__dirname, "tsconfig.json")
      }),
      resolvePlugin()
    ]
  }
}

export default currentPackageJson.buildOptions.formats.map(
  format => createConfig(format, outputConfig[format])
)

