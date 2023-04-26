function tabuada() {

    let num = document.querySelector('#txtnum');
    //let tabuada = document.querySelector('#tabu');
    let tab = document.querySelector('#tab');


    if (num.value.length == 0) {
        alert('Digite um número!')
    } else {
        let nFinal = Number(num.value);
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            item.text = `${nFinal} x ${c} = ${nFinal * c}`
            //item.value = `tab${c}` mais utilizado em php para selecionar  qual o item foi selecionado.
            tab.appendChild(item);
        }
    }

}