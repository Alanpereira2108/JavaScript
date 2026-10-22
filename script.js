//console.log() Mostra uma informação no console
console.log("Olá, Mundo!");//string
console.log("Vai Santos");//number

console.log(typeof "Vai Santos");// string
console.log(typeof true);// boolean
console.log(typeof false);// boolean

// váriavel
// const não tem valor alterado durante o programa
const nome = "Alan";
console.log(nome);

//let pode ter seu valor alterado durante o programa
let idade = 18;
console.log(idade);

console.log("Olá " + nome + ", que tem " + idade +  " anos. ");

idade = 19;
console.log(idade)

console.log(`Olá ${nome}, que tem ${idade} anos.`);

//Exercício

const name = "Alan";
let peso = "67";

console.log(`Olá ${name}, que tem ${peso} kg.`);

peso = 68;
console.log(`Olá ${name}, que tem ${peso} kg.`);

//Métodos de string
const texto = "JavaScript"

console.log(texto.length) //conta quantos os caracteres a string tem

console.log(texto.toUpperCase()) //toUpperCase serve para deixar em caps-lock

console.log(texto.toLowerCase())//altera as letras para minúscula

const nome_completo = "Alan Pereira da Silva"

console.log(nome_completo.includes("Silva"))

console.log(10 > 5) //true
console.log(10 < 5) //false
console.log(10 >= 10) //true
console.log(10 <= 5) //false
console.log("10" == 10) //true
console.log("10" === 10) //false
console.log(10 !== 5) //true

const idadePessoa = 18

console.log(idadePessoa >= 18) //false
console.log(idadePessoa >= 16) //true

const nome_completo1 = "Wesley"
console.log(nome_completo1 == "wesley")

// coletamos a idade da pessoa
let pessoaIdade = 19;
// vereficar se a idade é maior ou igual a 18
if(pessoaIdade >= 18){
    // se maior ou igual a 18 então ela é maior de idade
    console.log("Já Pode Ser Preso rsrs!")
}else{
    // senão, então ela é menor de idade
    console.log("Não vai pra balada!😒")
}

// coletamos a idade da pessoa
let idadeVotacao = 16
// verificar se pessoa é maior de 70
if(idadeVotacao > 70){
    console.log("Você não é obrigado a votar!")
}else if(idadeVotacao >= 18){
    // senão se a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente!")
}else if(idadeVotacao >= 16){
    // senão se a idade da pessoa for maior ou igual a 16
    console.log("Você não é obrigado a votar, mas caso queira pode!")
}else{
    // senão for nenhuma das alternativas anteriores
    console.log("Você NÃO pode votar!")
}

//1

let média = 7
 
if(média >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}

//2

let comparacao = 7
let comparacao1 = 7
    if(comparacao > comparacao1){
        console.log("Primeira é maior")
    }else if(comparacao < comparacao1){
        console.log("Segundo maior")
    }else {
        console.log("Empate")
    }


//3
const senha_senai = "senai123"

if(senha_senai == "senai123"){
    console.log("Acesso Autorizado")
}else{
    console.log("Senha Incorreta")
}


//4

let temperatura = 20

if(temperatura < 18){
    console.log("Frio")
}else if (temperatura > 27){
    console.log("Quente")
}else{
    console.log("Agradável")
}

//5

const notas = 7

if(notas >= 9){
    console.log("Excelente")
}else if(notas >= 7){
    console.log("Bom")
}else if(notas >= 5){
    console.log("Regular")
}else{
    console.log("Insuficiente")
}

//6

let data = 4
 
if(data==1){
    console.log("Domingo")
}
else if (data==2){
    console.log("Segunda")
}
 else if (data==3){
    console.log("Terça")
}
else if (data==4){
    console.log("Quarta")
}
else if (data==5){
    console.log("Quinta")
}
else if (data==6){
    console.log("Sexta")
}
else if (data==7){
    console.log("Sábado")
}
else{
    console.log("Dia inválido")
}

let idadeDirigir = 19;
let CNH = true;
let temCarro = false;

if(idadeDirigir >= 18 && CNH == true && temCarro == true){
    console.log("Você Pode Dirigir!")
}else{
    console.log("Você Não pode dirigir")
}

let eh_professor = false;
let eh_aluno = false;

if(eh_professor == true || eh_aluno == true){
    console.log("Você tem direito a meia-entrada!")
}else{
    console.log("Você não tem direito a meia-entrada!")
}

//&& = e
//|| = ou


//Exercício 1

let num_inv = 10;

if(num_inv <= 11 || num_inv >= 49 ){
    console.log("Não está no inventário")
}else{
    console.log("Está no inventário")
}

//2

let cIdade =23;

if(cIdade > 16 && cIdade < 24 ){
    console.log("Está selecionado")
}else{
    console.log("Não está selecionado")
}

//3 

let assinante = false
let = compra200 = 200

if(assinante == true || compra200 >= 200){
    console.log("Frete grátis")
}else{
    console.log("Sem frete grátis")
}



//4

let diaSemana = "Domingo"

if(diaSemana == "Sábado" || diaSemana == "Domingo"){
    console.log("Fim de semana")
}else{
    console.log("Dia útil")
}

//5

let assinante2 = false
let compra150 = 150
let cupom= true

const desconto = (compra150 >=150 && assinante2 == true || cupom == true)

if(desconto){
    total = compra150 * 0.85
    console.log("15% de desconto")
}else{
    total = compra150
    console.log("Sem desconto")
}
console.log("Total Final = R$" + total.toFixed(2))
