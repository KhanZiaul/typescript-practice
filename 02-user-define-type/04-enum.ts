// There are 3 types of enmu. Enmu can't be duplicate

// Numerical enum

// enum numericalEnum{
//     firstPlayer,
//     secondPlayer,
//     thirdPlayer
// }

enum numericalEnum{
    firstPlayer,
    secondPlayer=2, //sencondPlayer value will be start 2 and then rest of value
    thirdPlayer
}

// console.log(numericalEnum)

// console.log(numericalEnum.secondPlayer)

enum stringEnum{
    firstPlayer = 'khan zia',
    secondPlayer = 'Megha Moni' ,
    thirdPlayer = 'Barai',
}

// console.log(stringEnum)

enum hetergenous{
    firstPlayer=1,
    secondPlayer='khan zia',
    thirdPlayer='megha'
}

console.log(hetergenous)