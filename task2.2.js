// При primeNumber(2) код не работатет

function primeNumber(number) {
    if (number == 0 || number == 1) {
        console.log('0 или 1 не являются простыми числами');
    } else {
        if (number <= 1000) {
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    console.log('Число не простое');
                    break;
                } else {
                    console.log('Число простое');
                    break;
                }
            }
        } else {
            console.log('Данные не верны');
        }
    }
}

primeNumber(2)