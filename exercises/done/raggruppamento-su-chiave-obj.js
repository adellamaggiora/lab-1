// Si scriva una funzione raggruppa_nascita(persone) che dato un array di oggetti con chiavi nome, 
// annonascita, e luogonascita, restituisca un oggetto che ha come chiavi i diversi anni di nascita
// e come valori degli array che raggruppino i rispettivi oggetti.


// NOTA: L'ordine degli oggetti negli array deve preservare l'ordine dell'array persone.



var persone = [
    {'nome': 'Leonardo da Vinci', 'annonascita': 1452, 'luogonascita': 'Vinci'},
    {'nome': 'Pietro del Donzello', 'annonascita': 1452, 'luogonascita': 'Firenze'},
    {'nome': 'Davide Ghirlandaio', 'annonascita': 1452, 'luogonascita': 'Firenze'},
    {'nome': 'Leonardo Fibonacci', 'annonascita': 1170, 'luogonascita': 'Pisa'}
  ]
  
  
  function raggruppa_nascita(persone) {
  
      const result = {}
  
      for (const persona of persone) {
          const { annonascita } = persona;
          if (!result[annonascita]) {
              result[annonascita] = [];
          }
          result[annonascita].push(persona);
      }
  
      return result
  }
  
  console.log(raggruppa_nascita(persone))
  
  
  
  // raggruppa_nascita(persone) => {
  //   '1170': [
  //     {
  //       nome: 'Leonardo Fibonacci',
  //       annonascita: 1170,
  //       luogonascita: 'Pisa'
  //     }
  //   ],
  //   '1452': [
  //     {
  //       nome: 'Leonardo da Vinci',
  //       annonascita: 1452,
  //       luogonascita: 'Vinci'
  //     },
  //     {
  //       nome: 'Pietro del Donzello',
  //       annonascita: 1452,
  //       luogonascita: 'Firenze'
  //     },
  //     {
  //       nome: 'Davide Ghirlandaio',
  //       annonascita: 1452,
  //       luogonascita: 'Firenze'
  //     }
  //   ]
  // }