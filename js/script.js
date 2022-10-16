// função para retornar o scroll para o topo
function topo(){
    window.scrollTo({
    top:0,
    behavior: "smooth"
});} 


// função para fazer o scroll desaparecer e aparecer quando necessário
function decidirBotaoScroll(){
    if(window.scrollY === 0){
        document.querySelector('.scrollButton').style.display = 'none';
    }else{
        document.querySelector('.scrollButton').style.display = 'block';
    }
}

// uso do event listener, e uso da função que tem o condicional que verifica se o scroll aparece ou não.
window.addEventListener('scroll', decidirBotaoScroll);