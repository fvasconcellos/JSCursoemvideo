function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML = `Idade calculada: ${idade}` teste
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        img.style.borderRadius ='200px'
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebêMasculino.jpg');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovemMasculino.jpg');
            }else if (idade > 50) {
                //Adulto
                img.setAttribute('src', 'img/homemAdulto.jpg');
            }else {
                //Idoso
                img.setAttribute('src', 'img/idoso.jpg');
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebêFeminino.jpg');
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovemFeminino.jpg');
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/mulherAdulta.jpg');
            }else {
                //Idoso
                img.setAttribute('src', 'img/idosa.jpg');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img);
    }
} 