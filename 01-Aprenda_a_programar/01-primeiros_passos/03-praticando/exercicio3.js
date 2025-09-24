/*
3) Elabore um agoritmo que calcule o que deve ser pago a um produto, considerando o preço normal de 
etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o
calculo adequado.

Código Condição de pagamento:
- Á vista Débito, recebe 10% de desconto;
- Á vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes,preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaPagamento = 4;
console.log(`
    1 - Débito
    2 - Dinheiro ou PIX
    3- Duas vezes
    4 - Acima de duas vezes
    `)

if (formaPagamento === 1){
    desconto = precoEtiqueta * 0.10;
    NovoPreco = precoEtiqueta - desconto;
    console.log("Pagando em debito você paga "+NovoPreco)
}else if (formaPagamento === 2) {
    desconto = precoEtiqueta * 0.15;
    NovoPreco = precoEtiqueta - desconto;
     console.log("Pagando em dinheiro ou pix você paga "+NovoPreco)
}else if(formaPagamento === 3){
    console.log("Pagando em duas vezes  "+precoEtiqueta)
}else{
    juros = precoEtiqueta *0.10;
    NovoPreco = precoEtiqueta + juros;
    console.log("Pagando em acima de duas vezes de "+NovoPreco)
}