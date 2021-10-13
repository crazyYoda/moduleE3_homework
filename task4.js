// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль,
// начиная от первого и заканчивая вторым. Используйте setInterval.

let number_1 = 2;
let number_2 = 15;

function counter(st, n) {
    console.log(number_1);
    number_1++;
}
const intervalId = setInterval(counter, 1000, number_1, number_2);

setTimeout(function () {
    clearInterval(intervalId)
}, number_2*1000)
