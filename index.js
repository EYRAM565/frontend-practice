const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', ()=>{
    console.log('testing.... testing!!!!');
    const visibility = nav.getAttribute('data-visible')
    if(visibility === 'false'){
        nav.setAttribute('data-visible', true)
        toggle.setAttribute('aria-expanded', true)
    }else {
        nav.setAttribute('data-visible', false)
        toggle.setAttribute('aria-expanded', false)
    }
})