const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Choose an operation (add, subtract, multiply, divide): ', (operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            switch (operation) {
                case 'add':
                    result = a + b;
                    break;
                case 'subtract':
                    result = a - b;
                    break;
                case 'multiply':
                    result = a * b;
                    break;
                case 'divide':
                    result = a / b;
                    break;
                default:
                    console.log('Invalid operation');
                    rl.close();
                    return;
            }

            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});