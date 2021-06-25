window.dom={
    find(string){
        return document.querySelectorAll(string)
    },
    style(node, name, value){
        node.style[name] = value
    },
    each(nodeList, fn){
        for(let i=0; i<nodeList.length; i++){
            fn.call(null,nodeList[i])
        }
    }
}