const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
//   function flatten() {
    
//   }
const tentando = (accumulator, value) => {
    return `${accumulator} ${value}`
}

let teste = [0,1,2,3,4]

let contador = (array) => array.map((array) => array.reduce(( value1, value2) => `${value1}  ${value2}`))

console.log(contador(arrays));