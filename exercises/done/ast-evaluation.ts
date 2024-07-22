// abstract syntax tree
// https://ruslanspivak.com/lsbasi-part7/lsbasi_part7_ast_01.png
interface Nodo { val: string | number, sx?: Nodo, dx?: Nodo };

const ast: Nodo = {
    val: "-",
    sx: {
        val: "*",
        sx: { val: 4 },
        dx: {
            val: "+",
            sx: {
                val: "*",
                sx: { val: 5 },
                dx: { val: 4 }
            },
            dx: { val: 3 }
        }
    },
    dx: { val: 2 }
}

// scrivere una funnzione che prenda in input l'ast e restituisca il risultato

// gli operatori aritmetici sono OPERATORI BINARI, eseguono operazioni su 2 operandi
// visita posticipata, inserisco in una pila. appena trovo un operatore binario faccio 
// la pop degli ultimi 2 elementi (operandi) a cui applico l'operatore che ho appena incontrato

const stack = [];

function evalOp(bop: string, op1: number, op2: number): number {
    return eval(`${op2} ${bop} ${op1}`);
}

function postOrderVisit(t: Nodo) {
    if (!t) {
        return;
    }
    postOrderVisit(t.sx);
    postOrderVisit(t.dx);
    
    if (typeof t.val === 'string') {
        const op1 = stack.pop();
        const op2 = stack.pop();
        const result = evalOp(t.val, op1, op2);
        stack.push(result);
    }
    else {
        stack.push(t.val);
    }
}

function evaluateAst(ast: Nodo) {
    postOrderVisit(ast);
    return stack[0]
}

console.log(evaluateAst(ast))

