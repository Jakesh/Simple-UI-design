function collapse(){
    const sideNav = document.getElementById('sideNav')
    const content = document.getElementById('content_cotainer')
    const menu = document.getElementById('collapse-menu')
    var w = window.window.innerWidth;
    if(w <= 750){
        sideNav.classList.replace('sideNav','display_none')
        content.classList.replace('content-cotainer','content_displayFull')
        menu.classList.replace('display_none','collapse-menu')
    }
    else{
        sideNav.classList.replace('display_none','sideNav')
        content.classList.replace('content_displayFull','content-cotainer')
        menu.classList.replace('collapse-menu','display_none')
    }
}

function openNav(){
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const sideNav = document.getElementById('sideNav');
    const content = document.getElementById('content_cotainer')

    sideNav.classList.replace('display_none','sideNav')
    content.classList.replace('content_displayFull','content-cotainer')
    menu.classList.replace('menu', 'display_none');
    close.classList.replace('display_none', 'close');
}

function closeNav(){
    const menu = document.getElementById('menu');
    const close = document.getElementById('close');
    const sideNav = document.getElementById('sideNav');
    const content = document.getElementById('content_cotainer')

    sideNav.classList.replace('sideNav','display_none')
    content.classList.replace('content-cotainer','content_displayFull')
    menu.classList.replace('display_none','menu');
    close.classList.replace('close', 'display_none');
}