// There are 3 types of enmu. Enmu can't be duplicate
// Numerical enum
// enum numericalEnum{
//     firstPlayer,
//     secondPlayer,
//     thirdPlayer
// }
var numericalEnum;
(function (numericalEnum) {
    numericalEnum[numericalEnum["firstPlayer"] = 0] = "firstPlayer";
    numericalEnum[numericalEnum["secondPlayer"] = 2] = "secondPlayer";
    numericalEnum[numericalEnum["thirdPlayer"] = 3] = "thirdPlayer";
})(numericalEnum || (numericalEnum = {}));
// console.log(numericalEnum)
// console.log(numericalEnum.secondPlayer)
var stringEnum;
(function (stringEnum) {
    stringEnum["firstPlayer"] = "khan zia";
    stringEnum["secondPlayer"] = "Megha Moni";
    stringEnum["thirdPlayer"] = "Barai";
})(stringEnum || (stringEnum = {}));
// console.log(stringEnum)
var hetergenous;
(function (hetergenous) {
    hetergenous[hetergenous["firstPlayer"] = 1] = "firstPlayer";
    hetergenous["secondPlayer"] = "khan zia";
    hetergenous["thirdPlayer"] = "megha";
})(hetergenous || (hetergenous = {}));
console.log(hetergenous);
