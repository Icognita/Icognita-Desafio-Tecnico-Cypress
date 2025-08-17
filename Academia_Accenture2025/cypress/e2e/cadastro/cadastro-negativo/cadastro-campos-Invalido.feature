#utf-8
#language: pt

Contexto:
    Dado que o usuário acesse o portal webtables
    Quando ele clica no botao add e acessa o formulário de cadastro
    

Funcionalidade: Validação de todos os campos inválidos no cadastro

  Cenário: Cadastro com todos os campos inválidos
    Quando preenche todos os campos obrigatórios com dados inválidos e clica no botão "Submit"
    Então os campos devem ser exibidos com bordas vermelhas indicando erro

