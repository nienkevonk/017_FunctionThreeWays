// function declaration

function add(number1, number2) {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const sum = squared1 + squared2;
    const sumsquared = sum * sum;
    return sumsquared;
}

console.log(add(5, 6));


// function expression

const add = function (number1, number2) {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const sum = squared1 + squared2;
    const sumsquared = sum * sum;
    return sumsquared;
};

console.log(add(5, 6));

// arrow function

const add = (number1, number2) => {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const sum = squared1 + squared2;
    const sumsquared = sum * sum;
    return sumsquared;
};

console.log(add(5, 6));