/* Program to print sum of all the elements of a binary tree */
#include <bits/stdc++.h>
using namespace std;
 
struct Node {
    int key;
    Node* left, *right;
};
 
/* Cria a arvore */
Node* newNode(int key)
{
    Node* node = new Node;
    node->key = key;
    node->left = node->right = NULL;
    return (node);
}
 
/* funççao para encontrar a soma da arvore binaria*/
int addBT(Node* root)
{
    if (root == NULL)  // se for nulo reorna zero
        return 0;
    return (root->key + addBT(root->left) + addBT(root->right));// soma os nos
}
 
/* Testando a função*/
int main()
{
    Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);
    root->right->left = newNode(6);
    root->right->right = newNode(7);
    root->right->left->right = newNode(8);
 
    int sum = addBT(root);
    cout << "Sum of all the elements is: " << sum << endl;
 
    return 0;
}