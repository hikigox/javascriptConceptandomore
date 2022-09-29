"use strict";
/**
 * Estructura de Nodos en arboles binarios
 *
 *
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TNode = void 0;
class TNode {
    constructor(value, nleft, nright) {
        this.Nleft = null;
        this.Nright = null;
        this.value = value;
        this.Nright = nright;
        this.Nleft = nleft;
    }
    setLeftNode(node) {
        this.Nleft = node;
    }
    setRightNode(node) {
        this.Nright = node;
    }
    edges(node) {
        if (node.Nleft == null && node.Nright == null)
            return 0;
        return (1 + this.edges(node.Nleft) + this.edges(node.Nright));
    }
}
exports.TNode = TNode;
//# sourceMappingURL=TNode.js.map