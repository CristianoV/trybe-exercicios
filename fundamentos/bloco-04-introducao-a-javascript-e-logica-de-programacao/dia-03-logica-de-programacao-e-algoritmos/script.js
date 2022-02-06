let fruits = [3, 4, 10, 1, 12,];
let continha=0;

for (let index = 0; index < fruits.length; index+=1) {
    continha+= fruits[index]  
}
if (continha>15) {
    console.log(continha);
}
else{
    console.log("valor menor que 16");
}
// 
let teste;
let divisao =0;


for (let index = 2; index <= 150; index +=1) {
    if (index % 3 === 0) {
        divisao +=1;
    }
}
if (divisao === 50) {
    console.log("mensagem secreta, cuidado!");
}