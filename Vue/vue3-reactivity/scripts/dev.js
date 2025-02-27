// 开启进程进行打包
import { execa } from "execa"



async function build(targetPath) {
  //相当于在terminal 中 rollup -c 并传递一个环境变量 ENV_NODE
  // 并将打包的子进程中的输出信息 放在父进程的terminal中
  await execa(
    "rollup", 
    ["-cw", "--environment", `TARGET:${targetPath}`],
    {stdio: "inherit"}
  )
}

// build('reactivity')

build('runtime-dom')
