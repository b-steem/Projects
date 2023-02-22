document.addEventListener('DOMContentLoaded', function() {

    const contact = document.getElementById('contact-info');
    const body = document.querySelector('.main')
    const contact_btn = document.getElementById('contact-btn');
    const exit = document.getElementById('exit-contact');
    const menu_btn = document.querySelector('.dropdown')

    exit.onclick = function() {
        contact.style.display = 'none'
        body.style.filter = 'blur(0)'
        menu_btn.style.pointerEvents = 'auto'
        enableScroll()

    }
    contact_btn.onclick = function () {
        contact.style.display = "block";
        body.style.filter = 'blur(5px) brightness(70%)'
        menu_btn.style.pointerEvents = 'none';
        disableScroll()
    };
      
    
});

function enableScroll() {
    document.body.classList.remove("stop-scrolling");   
}

function disableScroll() {
    document.body.classList.add("stop-scrolling");
}
