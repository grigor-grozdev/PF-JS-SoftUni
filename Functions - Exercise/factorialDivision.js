function factorialDivision(num1, num2){
let result = 0;
let num1factorial = factorialNum1(num1);
let num2factorial = factorialNum2(num2);

result = num1factorial / num2factorial;
console.log(result.toFixed(2));

function factorialNum1(num1){
    let product1 = 1;
    for (let i = 1; i <= num1; i++){
        product1 *= i;
    }
    return product1;
}

function factorialNum2(num2){
    let product2 = 1;
    for (let i = 1; i <= num2; i++){
        product2 *= i;
    }
    return product2;
}

}

factorialDivision(6, 2);