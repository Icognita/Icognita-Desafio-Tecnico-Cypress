#utf-8
# language: pt

Funcionalidade: Validação de e-mail inválido no cadastro

  Contexto:
    Dado que o usuário acesse o portal webtables
    Quando ele clica no botao add e acessa o formulário de cadastro

  Cenário: Cadastro com e-mail inválido
    E preenche todos os campos obrigatórios com e-mail inválido e clica no botão "Submit"
    Então o campo de e-mail deve exibir uma borda vermelha indicando erro



