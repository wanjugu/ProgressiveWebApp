document.addEventListener('DOMContentLoaded',function(){

    //nav menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus,{edge: 'right'});

    //add receipe
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms,{edg: 'left'});
});