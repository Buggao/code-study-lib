/** 
 * 关于元素节点的相关操作
 * 增 删 改 查 元素中插入文本 文本创建 文本元素内容设置 获取父亲元素 获取下一个元素
 * */ 

export const nodeOps = {
  createElemnt: tagName => document.createElement(tagName),
  // 如果child 没有父元素怎么办？
  remove: child => child.parentNode && child.parentNode.removeChild(child),
  // 这里的 anchor 是什么意思？
  insert: (child, parent, anchor = null) => parent.insertBefore(child, anchor),
  querySelector: selector => document.querySelector(selector),
  setElementText: (el, text) => el.textContent = text,
  createText: text => document.createTextNode(text),
  setText: (node, text) => node.nodevalue = text,
  getParent: node => node.parentNode,
  getNextSibling: node => node.nextElementSibling
}