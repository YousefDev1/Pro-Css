// Colse Alert
var alert_close = document.getElementById('alert-close');

alert_close.addEventListener('click', ()=> {
    alert_close.parentElement.style.opacity = '0';
    setInterval(()=> {
        alert_close.parentElement.remove()
    }, 300)
})

// Toggle List
var toggle_btn = document.getElementById('toggle-list__btn');
var navbar_links = document.getElementById('navbar-links');

toggle_btn.addEventListener('click', ()=> {
    if(navbar_links.style.right == '-50%')
    {
        navbar_links.style.right = '0%'
    }else{
        navbar_links.style.right = '-50%'
    }
})
