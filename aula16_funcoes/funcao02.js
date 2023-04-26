/*function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(2, 3)); chamada */

function soma(n1 = 0, n2 = 0) { //se a chamada tiver apenas um valo então será atribuído o valo zero no parâmetro.
    return n1 + n2;
}

console.log(soma(7));