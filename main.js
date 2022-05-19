function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let body = document.getElementById('corpo')
    let data =  new Date()
    let hora =   data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        img.src = './img/manha.png'
        body.style.background = 'rgb(245, 241, 32)'
    }else if(hora >= 12 && hora < 18){
        img.src = './img/tarde.png'
        body.style.background = 'rgb(233, 77, 15)'
    }else {
        img.src = './img/noite.png'
        body.style.background = 'rgb(6, 2, 53)'
    }
}



