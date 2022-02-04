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