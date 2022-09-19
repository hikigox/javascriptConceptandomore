"use strict";
/*
 *
    Clase nodo :
    elemento : valor que se guarda en el nodo
    next : el siguiente nodo

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node_ = void 0;
const Node_generic_1 = require("../Node_generic");
class Node_ extends Node_generic_1.Nodes_Generic {
    constructor(element) {
        super(element);
        this.siguiente = null;
    }
}
exports.Node_ = Node_;
//# sourceMappingURL=Node.js.map