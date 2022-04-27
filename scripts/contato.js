let value

document.querySelectorAll('.to-form-button').forEach(botoes => {
    botoes.addEventListener('click', (datas)=>{
        document.getElementById('lista-botoes').setAttribute('hidden', '')
        
        showForm(datas.currentTarget.innerText)
    })
})


function showForm(value){
    document.getElementById('form').removeAttribute('hidden')
    document.getElementById('form-title').innerText = value
}



document.getElementById('bt-exit-form').onclick = ()=>{
    document.getElementById('lista-botoes').removeAttribute('hidden')
    document.getElementById('form').setAttribute('hidden', '')
    document.getElementById('form').rem
}