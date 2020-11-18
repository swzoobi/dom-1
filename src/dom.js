window.dom = {
  // 增

  create(string) {
    const container = document.createElement("template"); // template标签可以容纳任意标签而不出错
    container.innerHTML = string.trim(); // 去掉输入文本的空格
    return container.content.firstChild; // 返回template中的内容
  },
  after(node, node2) {
    node.parentNode.insertBefore(node2, node.nextSibling);
  },
  before(node, node2) {
    node.parentNode.insertBefore(node2, node);
  },
  append(parent, child) {
    parent.appendChild(child);
  },
  wrap(node, parent) {
    // 给node找个父亲
    dom.before(node, parent);
    dom.append(parent, node);
  },

  // 删

  remove(node) {
    node.parentNode.removeChild(node);
    return node;
  },
  empty(node) {
    const array = [];
    let x = node.firstChild;
    while (x) {
      array.push(dom.remove(node.firstChild));
      x = node.firstChild;
    }
    return array;
  },

  // 改
  attr(node, name, value) {
    if (arguments.length === 3) {
      node.setAttribute(name, value);
    } else if (arguments.length === 2) {
      return node.getAttribute(name);
    }
  },
  text(node, text) {
    let method = "textContent";
    if ("innerText" in node) {
      method = "innerText";
    }

    if (arguments.length === 2) {
      node[method] = text;
    } else if (arguments.length === 1) {
      return node[method];
    }
  },
  html(node, html) {
    if (arguments.length === 2) {
      node.innerHTML = html;
    } else if (arguments.length === 1) {
      return node.innerHTML;
    }
  },
  style(node, style, value) {
    if (arguments.length === 3) {
      node.style[style] = value;
    } else if (arguments.length === 2) {
      if (typeof style === "string") {
        return node.style[style];
      } else if (style instanceof Object) {
        for (key in style) {
          node.style[key] = style[key];
        }
      }
    }
  },
  class: {
    add(node, className) {
      node.classList.add(className);
    },
    remove(node, className) {
      node.classList.remove(className);
    },
    has(node, className) {
      return node.classList.contains(className);
    },
  },
  on(node, eventName, fn) {
    node.addEventListener(eventName, fn);
  },
  off(node, eventName, fn) {
    node.removeEventListener(eventName, fn);
  },

  // 查
  find(selector, scope) {
    return (scope || document).querySelectorAll(selector);
  },
  parent(node) {
    return node.parentNode;
  },
  children(node) {
    return node.children;
  },
  siblings(node) {
    return Array.from(node.parentNode.children).filter((n) => n !== node);
  },
  next(node) {
    let x = node.nextSibling;
    while (x && x.nodeType === 3) {
      x = x.nextSibling;
    }
    return x;
  },
  previous(node) {
    let x = node.previousSibling;
    while (x && x.nodeType === 3) {
      x = x.previousSibling;
    }
    return x;
  },
  each(nodeList, fn) {
    for (let i = 0; i < nodeList.length; i++) {
      fn.call(null, nodeList[i]);
    }
  },
  index(node) {
    const list = dom.children(node.parentNode);
    let i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === node) {
        break;
      }
    }
    return i;
  },
};
