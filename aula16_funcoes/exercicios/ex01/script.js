/*function adicionar() {
    let tnum = document.getElementById('txnum');

    if (tnum.value.length == 0) {
        alert('Digite um número!');
    } else if (tnum.value > 100) {
        alert('Digite um número entre 1 e 100!')
    } else {
        let num = Number(tnum.value);
        lista.innerHTML = '';

        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado`;
        lista.appendChild(item);

    }


}

function finalizar() {
    let btn = document.getElementById('button');

}*/

let num = document.getElementById('txnum');
let res = document.getElementById('res');
let lista = document.getElementById('lista');
let valores = [];


function adicionar() {
    if (validarNumero(num.value) && !inLista(num.value, valores)) {
        //alert('tudo certo');
        // lista.innerHTML = '';
        let numero = Number(num.value);
        valores = [numero];

        // Adicionando opções no select
        for (let i = 0; i < valores.length; i++) {

            let item = document.createElement('option');
            item.value = valores[i];
            item.text = `Valor ${valores[i]} adicionado`;
            lista.appendChild(item);
        }



    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
}

function validarNumero(n) {  // validar o input para que execute valores apenas entre 1 e 100.
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {  // Checa se já tem o número dentro da lista.
    if (l.indexOf(Number(n)) != -1) { // indexOf returna -1 caso o número não exista dentro do array (ele pesquisa o elemento dentro da array).
        return true;
    } else {
        return false;
    }
}

