/**
 * styleElement class
 */
var singletonCounter = 0
var key = 'home'

function styleElement () {
  this.id = 'stylesheet_' + singletonCounter++
  this.parentNode = undefined
  this.childNodes = []
  // create Style Element
  webc.nodeOpt.addStyleElement(key, this)
}

styleElement.prototype.appendChildNode = function (node) {
  node = escape(node)
  this.childNodes.push(node)
  // append Style TextNode
  webc.nodeOpt.appendStyleNode(key, this, node)
}

styleElement.prototype.insertChildNode = function (node, index) {
  node = escape(node)
  this.childNodes.splice(index, 0, node)
}

styleElement.prototype.removeChildNode = function (index) {
  this.childNodes.splice(index, 1)
}

module.exports = styleElement
