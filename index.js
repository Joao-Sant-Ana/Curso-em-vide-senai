var nome = window.prompt('Digite seu nome: ')
var ano = window.prompt('Qual foi o ano em que voê nasceu?')
var anoAtual = new Date().getFullYear()
let dias = Number((anoAtual - ano) * 365)
document.writeln(`<h3>Você ja viveu ${dias} dias.</h3>`)
document.writeln(`<h2>Bem vindo ao sistema <strong>${nome}</strong>!</h2>`)