document.writeln('<h1>Sistema de identificação de alunos</h1>')
var nome = window.prompt('Digite seu nome: ')
var ano = window.prompt('Qual foi o ano em que voê nasceu?')
var anoAtual = new Date().getFullYear()
let dias = Number((anoAtual - ano) * 365)
document.writeln(`Você ja viveu ${dias} dias.`)
document.writeln(`<h2>Bem vindo ao sistema <b>${nome}</b>!</h2>`)