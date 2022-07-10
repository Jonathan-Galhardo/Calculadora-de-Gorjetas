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
    var sf = s.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    var t = s / n3 
    var tf = t.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    valor_da_gorjeta.innerText = sf
    total_gorjeta_valor.innerText = tf
    
   
}