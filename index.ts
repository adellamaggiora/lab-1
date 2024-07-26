/**
 * Si scriva una funzione Typescript sxdx(T) che, ricevuto come argomento un albero binario T
 * strutturato come visto a lezione (oggetti con chiavi val di tipo string, 
 * sx che contiene il nodo sinistro, e dx che contiene il nodo destro), 
 * e con valori di tipo stringa, restituisca una coppia [l,r] 
 * in cui l è la stringa che si ottiene concatenando i valori di tutti i nodi, 
 * partendo dalla radice e scendendo sempre a sinistra finché è possibile, 
 * mentre r è la analoga stringa ottenuta scendendo sempre a destra.

   La soluzione deve essere scritta in TypeScript, 
   definendo opportunamente i tipi, e non usando any o unknown.
 */


type TTree = { val: string, sx?: TTree, dx?: TTree }

function _sxdx(tree: TTree): [string, string] {

    if (!tree) {
      return ['', '']
    }

    let left: string = tree.val;
    let right: string = tree.val;

    left += _sxdx(tree.sx)[0]
    right += _sxdx(tree.dx)[1]

    return [left, right];

}


var tr1 = {
  val: "a",
  sx: {
      val: "b",
      sx: {val: "g", sx: {val: "x"}, dx: {val: "y", sx: {val: "w"}}},
      dx: {val: "c"}
  },
  dx: {
      val: "e",
      sx: {val: "f", sx: {val: "z"}},
      dx: {val: "g", sx: {val: "x"}, dx: {val: "y", dx: {val: "w"}}}
  }
}

console.log(_sxdx(tr1))