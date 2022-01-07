// funcao do vereficador de idade 
function verificar(){
    var data = new Date()  //apenas data
    var ano  = data.getFullYear() // apenas ano
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verefique os dados e tente novamente! ')
    
    }else{

        var  fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if(fsex[0].checked){
            genero = "Homem"
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute("src", "img/bebeH.png")

            }else if(idade < 21){
                //jovem
                img.setAttribute("src", "img/jovemH.png")

            }else if(idade < 60){
                //menos idoso
                img.setAttribute("src", "img/adulto.png")

            }else{
                //idoso
                img.setAttribute("src", "img/velho.png")
            }

        }else if(fsex[1].checked){
            genero = "Mulher"
            if(idade >= 0 && idade < 10){
                //crianca
                img.setAttribute("src", "img/bebeM.png")
            }else if(idade < 21){
                //jovem
                img.setAttribute("src", "img/jovemM.png")

            }else if(idade < 60){
                //menos idosa

                img.setAttribute("src", "img/adulta.png")

            }else{
                // idosa

                img.setAttribute("src", "img/velha.png")
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) 
    }

}
