function sample() {
    console.log("sample fun");
}

let counter = function (arr) {
    return `length ${arr.length}`;
}

let factorial = function (num) {
    if (num <= 1)
        return 1;

    return num * factorial(num - 1);
}

console.log(counter([1, 2, 3, 4, 5]));
console.log(factorial(5));