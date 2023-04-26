function adicionar() {
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

