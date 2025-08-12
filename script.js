let nome = "João"
let idade = 18
let cidade = "Apuiarés"
let profissao = "Engenheiro de Software"
let anoAtual = 2025

const anoNascimento = anoAtual - idade

let salario = 1500
let bonus = 525

let salarioMes = salario + bonus
let salarioAno = salarioMes * 12
let salarioAnual = salarioAno * 2 //dobrado

alert (`  ========= RELATÓRIO DO USUÁRIO =========
    Nome: ${nome}
    Idade: ${idade} 
    Ano de nascimento ${anoNascimento}
    Cidade: ${cidade}
    Profissão: ${profissao}
    
    Sálario base: U$${salario}
    Bônus: U$${bonus}
    Total mensal: U$${salarioMes}
    Total ano: U$${salarioAno}
    Total anual (salário dobrado): U$${salarioAnual}
    =====================================`) 