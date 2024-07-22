// scrivere una funzione che prenda in input un oggetto generico e restituisca un array
// contenete le stringhe con i nome classi che appartengono all'oggetto
// (duplicati ammessi)

class Vehicle { }

class Car extends Vehicle { }

const lambo = new Car();

/**
 * versione ricorsiva proposta da @adellamaggiora
 * qualcuno propone un altro modo? @todo
 */
function getObjClasses(obj) {
    if (!obj) {
        return null;
    }
    const className = obj.constructor.name;

    if (className === 'Object') {
        return [className];
    }

    return [className, ...getObjClasses(Object.getPrototypeOf(obj))];
}

console.log(`Lambo class list:`);
console.log(getObjClasses(lambo));

/**
 * La classe 'Car' viene inserita 2 volte nell'array perchè
 * 'lambo' che il suo prototype hanno lo stesso constructor.name
 */

const prototypeOfLambo = Object.getPrototypeOf(lambo);

console.log(lambo.constructor.name === prototypeOfLambo.constructor.name);

