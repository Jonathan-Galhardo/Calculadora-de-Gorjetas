/*receber o valor total da conta*/
/* Salvar o valor total da conta em uma variável*/ 
var tc = document.querySelector('input#total-conta')
var tc = Number(tc.value)
/*receber o valor de 5% caso o usuario clique no botão*/
/*Salvar o valor de 5% em uma variável*/
//var p5 = document.querySelector('button#5p.btn-porc')
//var p5 = Number(p5.value)
/*receber o valor de 10% caso o usuario clique no botão*/
/*Salvar o valor de 10% em uma variável*/
var p10 = document.querySelector('button#10p.btn-porc')
var p10 = Number(p10.value)
/*receber o valor de 15% caso o usuario clique no botão*/
/*Salvar o valor de 15% em uma variável*/
var p15 = document.querySelector('button#15p.btn-porc')
var p15 = Number(p15.value)
/*receber o valor de 20% caso o usuario clique no botão*/
/*Salvar o valor de 20% em uma variável*/
var p20 = document.querySelector('button#20p.btn-porc')
var p20 = Number(p20.value)
/*receber o valor de 25% caso o usuario clique no botão*/
/*Salvar o valor de 25% em uma variável*/
var p25 = document.querySelector('button#25p.btn-porc')
var p25 = Number(p25.value)

/* receber o valor caso o usuario digite um percentual diferente dos botoes/*
/*salvar esse valor em uma variável*/
//<input type="number" name="customp" id="customp" class="custom-input">//
var customp = document.querySelector('input#customp.custom-input')
var customp = Number(customp.value)
/* salvar o valor da gorjeta em uma variavel gorjeta*/ 
function somar(){
    var gorjeta = p5 + p10 + p15 + p20 + p25 + customp
}

/*Acrescentar o valor da gorjerta ao valor total da conta*/
/*Criar a variável conta final*/
function somar(){
    var contafinal = gorjeta + tc
}

/*receber o valor de quantidade de pessoas*/
/*criar uma variavel pessoas*/
var pessoas = document.querySelector('input#pessoa_valor')
var pessoas = Number(pessoas.value)

/* dividir o valor da gorjeta pelo número de pessoas e guardar em uma variável*/ 
function dividir(){
    var gp = gorjeta  / pessoas
    resultado.innerHTML = gp
}
//mostrar o valor da divisao da gorjeta no campo específico// 

// dividir o valor total da conta pelo numero de pessoas, guardar em uma variavel// 

//mostrar o valor final divivdo no campo específico// 

//zerar o calculo quando o usuario clicar em 'novo calculo' ( atualizar a página #home)// 


