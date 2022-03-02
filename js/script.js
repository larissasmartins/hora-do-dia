/* CHANGE IMAGE AND BACKGROUND COLOR ACCORDING TO THE HOUR */

function load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var date = new Date()
    var hour = date.getHours()

    msg.innerHTML = 'Agora são aproximadamente ' + hour + ' horas.'

    if ((hour >= 0) && (hour <= 12)){
        img.src = '../images/morning.png'
        document.body.style.background = '#F4AD61'
        document.body.style.color = '#F4AD61'
    } else if ((hour >= 12) && (hour <= 18)){
        img.src = '../images/afternoon.png'
        document.body.style.background = '#6A771A'
        document.body.style.color = '#6A771A'
    }
    else {
        img.src = '../images/night.png'
        document.body.style.background = '#0F203C'
        document.body.style.color = '#0F203C'
    }
}

