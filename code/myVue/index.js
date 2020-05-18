class Gvue {
  constructor(options) {
    this.root = document.querySelector(options.el)
    this.dataObj = options.data
    this.$data = {}
    this.render()
  }
  render() {
    // 初始化渲染页面
    this.deepCompile(this.root)
  }
  deepCompile(node) {
    // 编译模板
    let reg = /\{\{\s*(\S+)\s*}\}/g
    let nodes = node.childNodes
    nodes.forEach((node) => {
      if (node.nodeType === 3) {
        const textContent = node.textContent
        if (reg.test(textContent)) {
          node.textContent = textContent.replace(
            reg,
            this.dataObj[RegExp.$1]
          )
        }
      } else if (node.nodeType === 1) {
        this.deepCompile(node)
      }
    })
  }
}