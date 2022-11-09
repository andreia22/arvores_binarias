// let arvore = {
//     left: {
//         left : undefined,
//         right: {
//             value: 3
//         },
//       value: 2  
//     },
//     right: undefined,
//     value: 10
//   }
let arvore = {}

function insert(tree, value) {
    if (tree.value) {
        if (value > tree.value) {
            insert(tree.right, value)
        } else {
            insert(tree.left, value)
        }
    } else {
        tree.value = value
        tree.right = {}
        tree.left = {}
    }
}

function search(tree, value) {
    if (!tree.value || tree.value === value) {
        return tree.value
    }
    if (value < tree.value) {
        return search(tree.left, value)
    }
    return search(tree.right, value)
}

insert(arvore, 10)
//console.log(arvore)
insert(arvore, 11)
//console.log(arvore)
insert(arvore, 9)
//console.log(arvore)
console.log(search(arvore, 10))

function preOrder(tree) {
    console.log(tree.value)
    tree.left && preOrder(tree.left)
    tree.right && preOrder(tree.right)
}

function inOrder(tree) {
    tree.left && inOrder(tree.left)
    console.log(tree.value)
    tree.right && inOrder(tree.right)
}

function posOrder(tree) {
    tree.left && posOrder(tree.left)
    tree.right && posOrder(tree.right)
    console.log(tree.value)

}
        // console.log('preOrder')
        // preOrder(arvore)
        // console.log('inOrder')
        // inOrder(arvore)
        // console.log('posOrder')
        // posOrder(arvore)