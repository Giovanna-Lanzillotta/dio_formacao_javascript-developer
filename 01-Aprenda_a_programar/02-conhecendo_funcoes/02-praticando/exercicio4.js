/*
4) Elabore um agoritmo que calcule o que deve ser pago a um produto, considerando o preço normal de 
etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o
calculo adequado.

Código Condição de pagamento:
- Á vista Débito, recebe 10% de desconto;
- Á vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes,preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

console.log(`
    1 - Débito
    2 - Dinheiro ou PIX
    3- Duas vezes
    4 - Acima de duas vezes
    `)

const precoEtiqueta = 100;
const formaPagamento = 4;

function Pagardebito(){
    desconto = precoEtiqueta * 0.10;
    NovoPreco = precoEtiqueta - desconto;
    return console.log("Pagando em debito você paga "+NovoPreco)
}

function PagarDinheiroOuPix(){
    desconto = precoEtiqueta * 0.15;
    NovoPreco = precoEtiqueta - desconto;
    return console.log("Pagando em dinheiro ou pix você paga "+NovoPreco);
}

function PagarDuasVezes(){
    return console.log("Pagando em duas vezes  "+precoEtiqueta);
}

function PagarMaisDeDuasVezes(){
    juros = precoEtiqueta *0.10;
    NovoPreco = precoEtiqueta + juros;
    console.log("Pagando em acima de duas vezes de "+NovoPreco)
}



function CondicaoPagamento(){
    if (formaPagamento === 1){
    return Pagardebito();
}else if (formaPagamento === 2) {
    return PagarDinheiroOuPix();
}else if(formaPagamento === 3){
    return PagarDuasVezes();  
}else{
    return PagarMaisDeDuasVezes();
}

}

CondicaoPagamento();