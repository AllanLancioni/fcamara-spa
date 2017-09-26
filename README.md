# FcamaraTestSpa

## Requisitos para rodar o projeto
Node.js e NPM instalados na máquina
Angular CLI instalado globalmente
  npm i @angular/cli -g
  
## Rodando o projeto

No terminal, na pasta do projeto, rode o comando
  npm i
para instalar todas as dependencias, após finalizado, entre com
  ng serve
e o projeto já estará disponível na url *http://localhost:4200/*.
Também o possível gerar o build da aplicação via 
  ng build
e acessar a url com o caminho direto.

Cerifique-se que a api já esteja rodando também.

## Estrutura

O front do projeto, construído todo em Angular4 conta com:
- tela de login
- tela de registro
- listagem de produtos
- formulário para criação/atualização de produto
- serviços para buscar dados da API
- um middleware fazendo verificação dos JWT do login
