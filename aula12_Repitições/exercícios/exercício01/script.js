function contar() {
    let txini = document.getElementById('txtini');
    let txfim = document.getElementById('txtfim');
    let txpso = document.getElementById('txtpso');
    let res = document.getElementById('res');
    

    if (txini.value.length == 0 || txfim.value.length == 0 || txpso.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //alert('[ERRO] Faltam Dados!')
    }else {
        res.innerHTML = 'Contando: <br>'
        let inicio = Number(txini.value);
        let fim = Number(txfim.value);
        let passo = Number(txpso.value);
        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1;
        }

        if (inicio < fim) {
            //Contagem crescente
            for(let i = inicio; i <= fim; i += passo) {
                res.innerHTML += ` ${i} \u{1F449}`;
            }
        }else {
            //Contagem regressiva
            for (let i = inicio; i >= fim; i -= passo) {
                res.innerHTML += ` ${i} \u{1F449}`;
            }
        }    
        res.innerHTML += `\u{1F3C1}`
    }
}