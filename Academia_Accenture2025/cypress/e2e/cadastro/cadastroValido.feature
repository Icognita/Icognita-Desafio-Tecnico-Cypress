#utf-8
#language: pt
Funcionalidade: Automação de Cenário de registro

  Como um usuário
  Eu quero gerenciar registros no portal
  Para garantir que o sistema de registro está funcionando corretamente

  Cenário: Gerenciar um Cadastro completo
    Dado que o usuário acesse o portal webtables
    Quando ele clica no botao add e acessa o formulário de cadastro
    E preenche todos os campos obrigatórios com dados válidos e clica no botão submit
    Então  os dados devem aparecer na última linha da tabela
    Quando o usuário clica no botão  editar e faz alteração o nome do usuário
    E os  dados alterados  deve aparecer na tabela
    Quando o usuário clica no botão excluir  registro
    Então o registro não deve mais aparecer na tabela

  