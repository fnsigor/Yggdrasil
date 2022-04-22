document.querySelectorAll(".btn-primary").forEach(button =>{

    if(button.getAttribute('id') == 'bt-atena'){
        button.addEventListener('click', ()=>{
            hideCards()
            document.getElementById('card-atena').removeAttribute('hidden')
        })
    } else if(button.getAttribute('id') == 'bt-excalibur'){
        button.addEventListener('click', ()=>{
            hideCards()
            document.getElementById('card-excalibur').removeAttribute('hidden')
        })
    } else if(button.getAttribute('id') == 'bt-fujin'){
        button.addEventListener('click', ()=>{
            hideCards()
            document.getElementById('card-fujin').removeAttribute('hidden')
        })
    }else if(button.getAttribute('id') == 'bt-mihawk'){
        button.addEventListener('click', ()=>{
            hideCards()
            document.getElementById('card-mihawk').removeAttribute('hidden')
        })
    }
})

function hideCards () {
    const anotherCards = document.querySelectorAll('#bloco-excalibur, #bloco-fujin, #bloco-mihawk, #bloco-atena')
    anotherCards.forEach(card =>{
        card.setAttribute('hidden', '')
    })
}