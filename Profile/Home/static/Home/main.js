document.addEventListener('DOMContentLoaded', function() {

    const contact = document.getElementById('contact-info');
    const body = document.querySelector('.main')
    const home_btn = document.getElementById('home-btn');
    const about_btn = document.getElementById('about-btn');
    const contact_btn = document.getElementById('contact-btn');
    const exit = document.getElementById('exit-contact');
    const menu = document.querySelector('.dropdown')
    const menu_btn = document.querySelector('.dropbtn')
    const menu_content = document.querySelector('.dropdown-content')

    home_btn.onclick = function() {
        menu.style.pointerEvents = 'auto';
        clearMenuSettings();
        enableScroll();
    };

    about_btn.onclick = function() {
        menu.style.pointerEvents = 'auto';
        clearMenuSettings();
        enableScroll();
    };

    menu_btn.onclick = function() {
        hideMenu();
        menu_btn.style.backgroundColor = "rgb(79,143,136)";
        menu_content.style.display = "block";
        disableScroll();
    };

    contact_btn.onclick = function () {
        hideMenu();
        contact.style.display = "block";
        body.style.filter = 'blur(5px) brightness(70%)';
        menu.style.pointerEvents = 'none';
        disableScroll();
    };
      
    exit.onclick = function() {
        contact.style.display = 'none';
        body.style.filter = 'blur(0)';
        menu.style.pointerEvents = 'auto';
        clearMenuSettings();
        enableScroll();
    };

    function clearMenuSettings() {
        menu_btn.style.backgroundColor = '';
        menu_content.style.display = '';
    };

    function hideMenu() {
        menu_btn.style.backgroundColor = 'transparent';
        menu_content.style.display = 'none';
    };
    
    function enableScroll() {
        document.body.classList.remove("stop-scrolling");   
    };
    
    function disableScroll() {
        document.body.classList.add("stop-scrolling");
    };
});


