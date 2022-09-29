"use strict";
/*
 *
 * Ejemplo de Arbol binario
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const TNode_1 = require("./TNode");
const childLeft = new TNode_1.TNode(1, new TNode_1.TNode(2, new TNode_1.TNode(2), new TNode_1.TNode(2)), new TNode_1.TNode(2, new TNode_1.TNode(2), new TNode_1.TNode(2)));
const childRight = new TNode_1.TNode(1, new TNode_1.TNode(2, new TNode_1.TNode(2), new TNode_1.TNode(2)), new TNode_1.TNode(2, new TNode_1.TNode(2), new TNode_1.TNode(2)));
const binarieTree = new TNode_1.TNode(1, childLeft, childRight);
console.log(binarieTree.edges(binarieTree));
//# sourceMappingURL=example.js.map