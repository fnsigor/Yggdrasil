let value

document.querySelectorAll('.to-form-button').forEach(botoes => {
    botoes.addEventListener('click', (datas)=>{
        document.getElementById('lista-botoes').setAttribute('hidden', '')
        
        showForm(datas.currentTarget.innerText)
    })
})


function showForm(value){
    document.getElementById('form').removeAttribute('hidden')
    let newEl = document.createElement('h3')
    newEl.innerText = value
    document.getElementById('form').prepend(newEl)
}