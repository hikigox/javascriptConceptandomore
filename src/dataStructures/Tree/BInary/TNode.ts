/**
 * Estructura de Nodos en arboles binarios
 * 
 * 
 * 
 */



export class TNode {
    private value: number;
    private Nleft: TNode = null;
    private Nright: TNode = null;

    constructor(value: number, nleft?: TNode , nright?: TNode){
            this.value = value;
            this.Nright = nright;
            this.Nleft = nleft;


    }


    setLeftNode (node: TNode) {
        this.Nleft = node


    }


    setRightNode (node: TNode) {
        this.Nright = node


    }


    edges(node: TNode): number {
        if (node.Nleft == null && node.Nright == null) return 0; 
        return (1 + this.edges(node.Nleft)+ this.edges(node.Nright) )


    }


}