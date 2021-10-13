// Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым,
// и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны.

function primeNumber(number){
    if(number <= 1000){
        switch (number){
            case 0:
                console.log('0 не является простым числом');
                break;
            case 1:
                console.log('1 не является простым числом');
                break;
            case 2:
                console.log('Является простым числом');
                break;
            default:
                for (let i = 2; i < number; i++){
                    if (number % i == 0){
                        console.log('Число не простое');
                        break;
                    }else{
                        console.log('Число простое');
                        break;
                    }
        }
        }
    }else{
        console.log('Данные не верны');
    }
}

primeNumber(2)


