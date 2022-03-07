const cristiano = {
  firstName: 'Cristiano',
  age: 17,
  job: 'estidante'
}

let sobrenome = 'Vieira';
let lastName = 'LastName';
cristiano[lastName] = sobrenome;
let drive = 'carteira'
let podeDirigir = (idade) => idade >= 18 ? 'pode dirigir' : 'não pode dirigir';
cristiano[drive] = podeDirigir(cristiano.age)

console.log(cristiano);