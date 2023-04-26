let num = [2, 5, 8, 3, 7]
num.push(1)
/*num.sort() coloca os valores em ordem crescente.
//num[2] = 15;
//num.push(2);
console.log(num);
console.log(`O array tem ${num.length} posições`);
console.log(`O primeiro valor do array é ${num[0]}`);*/

/*for (let c = 0; c < num.length; c++) {
    num.sort() 

    console.log(num[c])
}*/

for (let c in num) {
    console.log(num[c]);

}
let pos = num.indexOf(6); // busca um valor(elemento, não o indice) dentro de uma array caso o elemento não exista no array será retornado o (-1)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
