document.querySelectorAll(".btn-primary").forEach(button =>{

    const buttonId = button.getAttribute('id')
    button.addEventListener('click', ()=>{
        if(buttonId == 'bt-atena'){
                hideMainCards()
                document.getElementById('card-atena').removeAttribute('hidden')

        } else if(buttonId == 'bt-excalibur'){
            hideMainCards()
            document.getElementById('card-excalibur').removeAttribute('hidden')

        } else if(buttonId == 'bt-fujin'){
            hideMainCards()
            document.getElementById('card-fujin').removeAttribute('hidden')

        }else{
            hideMainCards()
            document.getElementById('card-sauron').removeAttribute('hidden')
        }

    }) //end addEventListener
}) //end forEach




//show main cards when pressing back button
document.querySelectorAll('.button-back').forEach(backButton => {
    backButton.addEventListener('click', ()=>{
        hideSecundaryCard()
        showMainCards()
    })
})


function hideMainCards () {
    const anotherCards = document.querySelectorAll('#bloco-excalibur, #bloco-fujin, #bloco-sauron, #bloco-atena')
    anotherCards.forEach(card =>{
        card.setAttribute('hidden', '')
        card.classList.remove('show')
    })
}

function showMainCards () {
    const anotherCards = document.querySelectorAll('#bloco-excalibur, #bloco-fujin, #bloco-sauron, #bloco-atena')
    anotherCards.forEach(card =>{
        card.removeAttribute('hidden')
        card.classList.add('show')
    })
}

function hideSecundaryCard () {
    const ocults = document.querySelectorAll('#card-excalibur, #card-fujin, #card-sauron, #card-atena')
    ocults.forEach(ocultCard =>{
        ocultCard.setAttribute('hidden', '')
    })
}
