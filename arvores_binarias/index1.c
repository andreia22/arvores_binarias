typedef struct node *link;

struct node {
   int  item; // conteúdo do nó
   link l, r; // 'l' de "left" e 'r' de "right"
} ;



// Devolve a altura de um nó h em uma
// árvore binária.

int height(link h) {
   int u, v;
   if (h == NULL) return -1; // verifica se esta nulo
   u = height(h->l); // pega altura
   v = height(h->r);
   if (u > v) return u+1;
   else return v+1;
}

// Esta função devolve o número de nós
// da árvore binária cuja raiz é h.

int count(link h) {
   if (h == NULL) return 0; // verifica se esta nollo
   return count(h->l) + count(h->r) + 1; // soma os valored dos nos
}

