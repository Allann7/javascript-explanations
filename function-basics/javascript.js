function add7(num){
    return num+7;
}
console.log(add7(10));

function multiply(num1,num2){
    return num1*num2;
}
console.log(multiply(3,2));

function capitalize(str){
    str=str.toLowerCase();

    str=str.charAt(0).toUpperCase() + str.slice(1);

    return str;
}
console.log(capitalize("BEATLE"));

function lastLetter(str){
    return str.at(-1)
}
console.log(lastLetter("BEATLE"));

