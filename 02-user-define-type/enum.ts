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

console.log(numericalEnum)

console.log(numericalEnum.secondPlayer)