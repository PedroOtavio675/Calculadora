let resultado = document.getElementById("resultado")
let caixa = ''

function inserir(num){
    caixa += num
    resultado.innerHTML = caixa
}
function apagar(){
    caixa = ""
    resultado.innerHTML = '0'
}
function calc(){
    eval(caixa)
    let guarda = eval(caixa)
    resultado.innerHTML = eval(caixa)
    caixa = ''
    caixa = guarda
}
function porcent(p){
    let guard = caixa
    let pc = (caixa)/100
    resultado.innerHTML = pc
    caixa = pc
}
function deletar(){
    let menos = caixa = caixa.slice(0, -1)
    caixa = ''
    resultado.innerHTML = menos
    
}