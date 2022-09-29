

/*
 * 
 * Ejemplo de Arbol binario
 * 
 */

import { TNode } from "./TNode";




const childLeft:TNode = new TNode(1,new TNode(2,new TNode(2),new TNode(2)),new TNode(2,new TNode(2),new TNode(2)))
const childRight:TNode = new TNode(1,new TNode(2,new TNode(2),new TNode(2)),new TNode(2,new TNode(2),new TNode(2)))
const binarieTree = new TNode(1,childLeft,childRight);


console.log(binarieTree.edges(binarieTree));


