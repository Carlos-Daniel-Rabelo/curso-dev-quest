/*
    == ---- igual ---- a==b ---- verdadeiro se a for igual a b
    === ---- idêntico ---- a===b ---- verdadeiro se a for idêntico a b
    !== ---- não idêntico ---- a !== b ---- verdadeiro se o a não for idêntico a b
    != ---- diferente ---- a != b ---- verdareiro se o a for diferente de b
    < ---- menor que ---- a < b ---- verdadeiro quando a for menor que b
    <= ---- menor igual que ---- a <= b ---- verdadeiro quando a for menor ou igual a b
    > ----- maior que ---- a > b ---- verdadeiro quando a for maior que b
    >= ---- maior igual que ---- a >= b ---- verdadeiro quando a for maior ou igual a b
*/
//const a = 10
//const b = 3
//console.log(a >= b)

const a = 2
const b = 2

// console.log(a === b && a <= b)
// V e V = V

// console.log(a === b && a < b)
// V e F = F

// console.log(a > b && a === b)
// F e V = F

// console.log(a > b && a < b)
// F e F = F

/* 
OR
*/

// console.log(a === b || a <= b)
// V e V = V

// console.log(a === b || a < b)
// V ou F = V

// console.log(a > b || a === b)
// F ou V = V

// console.log( a > b || a < b)
// F ou F = F

/*
NOT
*/

console.log(!(a === b)) //false

console.log(!(a < b)) //true