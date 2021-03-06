function quantosParams(...args) {
    console.log('parâmetros:', args);
    return `Você passou ${args.length} parâmetros para a função.`;
  }
  
let numbers = (number1, number2) => number1 + number2;

  console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
  console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.
  console.log(quantosParams(numbers(1,2)));

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
  console.log(sum(4, 7, 8, 9, 60)); // 88
  console.log(sum(60,30,80));


const number1 = [1, 2, 3]

console.log(Math.max(...number1));