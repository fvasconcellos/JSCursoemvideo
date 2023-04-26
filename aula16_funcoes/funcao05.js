// Recursividade

function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

console.log(fatorial(5));

/*

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!  o fatorial de um número pode ser calculado baseado em um fatorial de outro número.

n! = n x (n-1)! para chamar uma função dentro de outra usando o fatorial é apenas declarar o valor de n * (n-1).
1! = 1  matematicamente o fatorial de 1 é sempre 1.

*/