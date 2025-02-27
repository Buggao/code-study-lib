// TODO:正则表达式学习
// 检测标签 
const ncname = `[a-zA-Z_][\\-\\.0-9_a-zA-Z]*`;
// `((?:[a-zA-Z_][\\-\\.0-9_a-zA-Z]*\\:)?[a-zA-Z_][\\-\\.0-9_a-zA-Z]*)`
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
// 检测标签开头
const startTagOpen = new RegExp(`^<${qnameCapture}`)
// 捕获结束标签的标签名
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`);
// 匹配属性
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// 匹配结束标签 />
const startTagClose = /^\s%(\/?)>/;
// 陪陪双花括号中间的内容
const defaultTagRE = /\{\{((?:.|\r?\n)=?)\}\}/g

// 负责将模板解析为AST语法树
function parseHtml(html) {

  function advance(n) {
    // substring 去除字符串的前n个字符后返回
    html = html.substring(n)
  }

  //此时要不断循环html 一直截取到html为空
  while(html) {
    // indexOf 返回所需匹配字符的第一个下标 没有则为-1
    let ishtmlEnd = html.indexOf("<")
    // 默认开头为 <div> 所以 isHtmlEnd 应该为 0
    if(ishtmlEnd == '0') {
      parseStartTag(html)
      break;
    }
  
    // 解析开始标签
    function parseStartTag(html) {
      // match 按照正则匹配字符串 无匹配结果返回null 有值则返回个包含匹配内容和方法的数组
      const startTagMatches = html.match(startTagOpen);
      if(startTagMatches) {
        const match = {
          tagName: startTagMatches[1]
        }
      }
      console.log(startTagMatches)
    }
  
  }
}

export default function compileFunction(template) {
  console.log(template);
  let ast = parseHtml(template);
}