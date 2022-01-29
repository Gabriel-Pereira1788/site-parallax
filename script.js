var botão_abrir=document.querySelector('div#botão_nav')
var botão_fechar=document.querySelector('div#botão_fechar')
var cabeçalho=document.querySelector('header#cabeçalho')
var nav_mobile=document.querySelector('div.nav_int')
function clicar(){
    cabeçalho.style.height='400px'
    nav_mobile.style.width='100%'
    nav_mobile.style.display='block'
    nav_mobile.style.content='normal'
    nav_mobile.style.position='static'
    botão_fechar.style.display='inline-block'
}
function fechar(){
    cabeçalho.style.height='70px'
    nav_mobile.style.display='none'
    botão_fechar.style.display='none'
}