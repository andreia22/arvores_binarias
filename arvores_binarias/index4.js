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

function countNo(tree) {
    if (tree.value){
        return 1 + countNo(tree.left) + countNo(tree.right)  
    } 
    return 0
}

function somaNo(tree) {
    if (tree.value){
        return tree.value + somaNo(tree.left.value) + somaNo(tree.right.value)  
    } 
    return 0
}

function profundidadeArvore(tree) {
    if (tree == null)
            return 0;
        else
        {
            /* calcule a profundidade de cada subárvore */
            let profundidadeEesquerda = profundidadeArvore(tree.left);
            let profundidadeDireita = profundidadeArvore(tree.right);

            /* use o maior */
            if (profundidadeEesquerda > profundidadeDireita)
                return (profundidadeEesquerda + 1);
            else
                return (profundidadeDireita + 1);
        }
}

insert(arvore, 10)
insert(arvore, 12)
insert(arvore, 11)
insert(arvore, 9)
insert(arvore, 5)
console.log(arvore)
console.log('------------------------------------------------------------')
countNo(arvore)
somaNo(arvore)
console.log('------------------------------------------------------------')
console.log(profundidadeArvore(arvore))






