# language: pt
# encoding: utf-8

Funcionalidade: Validação de todos os campos vazios no cadastro

  Contexto:
    Dado que o usuário acesse o portal webtables
    Quando ele clica no botao add e acessa o formulário de cadastro
    
  Cenário: Cadastro com todos os campos vazios
    E o usuário deixe todos os campos obrigatórios vazios e clica no botão "Submit"
    Então os campos devem ser exibidos com bordas vermelhas indicando erro
