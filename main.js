


document.querySelectorAll(".bloco").forEach(button =>{
    let anotherButtons

    if(button.getAttribute('id') == 'bloco-atena'){

        //sumindo com os outros blocos
        anotherButtons = document.querySelectorAll('#bloco-excalibur, #bloco-fujin, #bloco-mihawk')
        anotherButtons.forEach(buttons =>{
            buttons.setAttribute('hidden', '')
        })

        //aumentando largura e definindo estilo do bloco
        



    }
})