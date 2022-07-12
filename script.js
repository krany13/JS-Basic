// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"').nextElementSibling)

for (let node of document.body.childNodes) {
    if(node.name == '#text') {
        continue;
    }
    console.log(node);
}