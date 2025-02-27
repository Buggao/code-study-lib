// 打包这个 monorepo 项目

// node 解析目录
import fs from "fs"
// 开启进程进行打包
import { execa } from "execa"

// synchronization 同步 asynchronous 异步
//筛选出目录，排除文件    
const dirs = fs.readdirSync("packages").filter(path => 
  fs.statSync(`packages/${path}`).isDirectory()
)

async function build(targetPath) {
  //相当于在terminal 中 rollup -c 并传递一个环境变量 ENV_NODE
  // 并将打包的子进程中的输出信息 放在父进程的terminal中
  await execa(
    "rollup", 
    ["-c", "--environment", `TARGET:${targetPath}`],
    {stdio: "inherit"}
  )
}

// 并行打包
function runParallel(dirs, iterFn) {
  let promiseResult = []
  for(let path of dirs) {
    promiseResult.push(iterFn(path));
  }
  return Promise.all(promiseResult)
}

runParallel(dirs, build).then(res => {
  console.log("rullParallel", res);
})
