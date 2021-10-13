// Написать функцию, которая принимает число как аргумент и возвращает функцию,
// которая также принимает число как аргумент и возвращает сумму этих двух чисел.
// Выведите в консоль результат.

function firstFunc(some_number1){
    return function secondFunc(some_number2){
        return (some_number1 + some_number2);
    }
}

let resultFunc = firstFunc(15)(7);
console.log(resultFunc);