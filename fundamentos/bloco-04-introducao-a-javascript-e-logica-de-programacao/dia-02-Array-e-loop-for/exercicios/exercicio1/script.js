let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);
// console.log(numbers[5]);
// console.log(numbers[6]);
// console.log(numbers[7]);
// console.log(numbers[8]);
// console.log(numbers[9]);

// for (let index = 0; index < numbers.length; index += 1) {
//     let conta=numbers[index];
//     console.log(conta); 
// }
let somando;
for (let index = 0; index < numbers.length; index += 1) {
 somando=somando + numbers[index];
    console.log(somando); 
}

