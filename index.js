function taglia_nodi_interni(T, m) {

    console.log(T)

    if(!T) {
        return
    }

    if(T.figli?.length < m) {
        T = null;
    }

    for (const figlio of T.figli) {
        taglia_nodi_interni(figlio)
    }
}

var T0 = 
{val: 0, figli: [
    {val: 1, figli:[
        {val: 5, figli: [
            {val: 17, figli:[]},
            {val: 18, figli:[]}
        ]}, 
        {val: 6, figli: []},
        {val: 7, figli: []}]
    },
    {val : 2, figli:[
        {val: 8, figli: [
            {val: 20, figli: []},
            {val: 21, figli: []},
            {val: 22, figli: []}
        ]}]
    },
    {val : 3, figli:[
        {val: 11, figli: []}, 
        {val: 12, figli: []},
        {val: 13, figli: []}]
}]};

taglia_nodi_interni(T0, 4);

// {val: 0, figli:[]}

console.log(T0);