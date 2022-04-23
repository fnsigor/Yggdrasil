document.querySelectorAll('.article-capa').forEach(capas =>{
    capas.addEventListener('click', ()=> {
        capas.setAttribute('hidden', '')
        capas.nextElementSibling.removeAttribute('hidden')
    })
}) 

document.querySelectorAll('.article-content').forEach(contents =>{
    contents.addEventListener('click', ()=> {
        contents.setAttribute('hidden', '')
        contents.previousElementSibling.removeAttribute('hidden')
    })
}) 