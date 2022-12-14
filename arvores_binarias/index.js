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

function countNo(tree) {
    if (tree.value){
        return 1+ countNo(tree.left) + countNo(tree.right)  
    } 
    return 0
}

function somaNo(tree) {
    if (tree.value){
        return tree.value + somaNo(tree.left.value) + somaNo(tree.right.value)  
    } 
    return 0
}

function profundidadeArvore() {
    
}
// console.log(arvore)
insert(arvore, 10)
insert(arvore, 12)
// console.log(arvore)
insert(arvore, 11)
// console.log(arvore)
insert(arvore, 9)
insert(arvore, 5)
console.log(arvore)
console.log(search(arvore, 9))
console.log('------------------------------------------------------------')
console.log('preOrder')
preOrder(arvore)
console.log('inOrder')
inOrder(arvore)
console.log('posOrder')
posOrder(arvore)

console.log('inicio',arvore)
console.log('------------------------------------------------------------')
countNo(arvore)
somaNo(arvore)
console.log('------------------------------------------------------------')
console.log('fim',arvore)

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

