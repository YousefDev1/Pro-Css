// Colse Alert
var alert_close = document.getElementById('alert-close');

alert_close.addEventListener('click', ()=> {
    alert_close.parentElement.style.opacity = '0';
    setInterval(()=> {
        alert_close.parentElement.remove()
    }, 300)
})