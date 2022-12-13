const slides = document.querySelectorAll('.slide')
slides.forEach(element=>{
    element.addEventListener('click',()=>{
        clearClassActive();
        element.classList.add('active')})})

function clearClassActive (){
    slides.forEach(element=>{console.log('remove')
        element.classList.remove('active')})
}