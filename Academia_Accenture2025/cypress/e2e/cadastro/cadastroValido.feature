#utf-8
#language: pt
Funcionalidade: Automação de Cenário de Cadastro

  Como um usuário
  Eu quero gerenciar cadastros no portal
  Para garantir que o sistema de cadastro está funcionando corretamente

  Cenário: Gerenciar um cadastro completo
    Dado que o usuário acesse o portal webtables
    Quando ele clica no botao add e acessa o formulário de cadastro
    E preenche todos os campos obrigatórios com dados válidos e clica no botão submit
    Então  os dados devem aparecer na última linha da tabela
  