// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'banana', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite', 'nutella', 'whey'];

const fruitSalad = (fruit, additional) =>[...fruit,'ambrosia', ...additional];

console.log(fruitSalad(specialFruit, additionalItens));