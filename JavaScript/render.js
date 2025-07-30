function render(vnode, container) {
    const el = document.createElement(vnode.tag);
    for(let key in vnode.props) {
        if(key.startsWith('on')) {
            el.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);
        }
    }
    if(["string", "number", "boolean"].includes(typeof vnode.children)) {
        el.textContent = vnode.children;
    } else {
        vnode.children.forEach(element => {
            render(element, el);
        });
    }
    container.appendChild(el);
}
