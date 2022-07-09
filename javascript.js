function somar(){
    var tn1 = window.document.getElementById('total-conta')
    var tn2 = window.document.getElementById('customp')
    var pessoas = window.document.getElementById('pessoa_valor')
    var resultado = window.document.getElementById('valor_da_gorjeta')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(pessoas.value)
    var n2 = 1 + (n2/100)
    var s = (n1 * n2)
    valor_da_gorjeta.innerText = s
    var t = s / n3
    total_gorjeta_valor.innerText = t

    var pessoas = window.document.getElementById('pessoas')
}