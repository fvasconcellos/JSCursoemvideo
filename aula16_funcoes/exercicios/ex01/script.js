let num = document.getElementById('txnum');
let lista = document.getElementById('lista');
let valores = [];
let res = document.querySelector('#res');

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

function adicionar() {
    if (validarNumero(num.value) && !inLista(num.value, valores)) {

        /* let numero = Number(num.value);
         valores = [numero];*/
        valores.push(Number(num.value))

        // Adicionando opções no select

        /* for (let i = 0; i < valores.length; i++) {
             let item = document.createElement('option');
             item.value = valores[i];
             item.text = `Valor ${valores[i]} adicionado`;
             lista.appendChild(item);
         }*/
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        lista.appendChild(item);
        res.innerHTML = ''; // limpa o botão finalizar quando se clica no botão adicionar para poder continuar inserindo números.
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}

function maior() {
    let maiorNumero = valores[0];
    for (let i = 1; i < valores.length; i++) {

        if (valores[i] > maiorNumero) {
            maiorNumero = valores[i];
        }
    }
    return maiorNumero;
}

function menor() {
    let menorNumero = valores[0];
    for (let i = 1; i < valores.length; i++) {

        if (valores[i] < menorNumero) {
            menorNumero = valores[i];
        }
    }
    return menorNumero;
}


function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let total = valores.length;
        let soma = 0;
        let media = 0
        for (let i in valores) {
            soma += valores[i];
        }
        media = soma / total;
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior()}</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor()}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média do valores digitados é ${media}</p>`



        // poderia ser feito desta maneira também!  
        // let res = document.querySelectorAll('#res'); seleciona vários res que estiver no HTML e depois é apenas indicar qual você quer alterar. Ex: res[1] seria o segundo res do HTML
        /* res[0].innerHTML += `Ao todo, temos ${valores.length} números cadastrados`;
         res[1].innerHTML = maior();
         res[2].innerHTML += `O menor valor informado foi ${Math.min(...lista)}`;*/
    }


}











/*function adicionar() {
    let num = document.getElementById('txnum');
    let res = document.getElementById('res');
    let lista = document.getElementById('lista');
    let valores = [];


    if (num.value.length == 0) {
        alert('Digite um número!');
    } else if (num.value >= 1 && num.value <= 100) {

        let numero = Number(num.value);
        valores = [numero];

        // Adicionando opções no select
        for (let i = 0; i < valores.length; i++) {

            let item = document.createElement('option');
            item.value = valores[i];
            item.text = `Valor ${valores[i]} adicionado`;
            lista.appendChild(item);
        }
        let rept = valores.indexOf[i];
    } else if (rept != -1) {
        alert('Valor inválido ou já encontrado na lista');
    }
    else {
        alert('Digite um número entre 1 e 100!');
    }
}
*/