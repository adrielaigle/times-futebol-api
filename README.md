# API REST - Catálogo de Times de Futebol

API REST desenvolvida em Node.js e Express para gerenciamento e consulta de times do Brasil e do mundo.

## Como Executar o Projeto

1. Clone este repositório:

   git clone <https://github.com/adrielaigle/times-futebol-api.git>

2. Acesse a pasta do projeto:

    cd api-times

3. Instale as dependências:

    npm install

4. Inicie o servidor:

    npm start

5. A API estará acessível em http://localhost:8080/api/times

Workflow Git Utilizado

Foi utilizado o GitHub Flow.

Justificativa: O GitHub Flow é um fluxo de trabalho simples, ideal para entregas contínuas e projetos enxutos. A versão inicial da API contém a estrutura base e a rota de consulta (GET), disponibilizada diretamente na branch main.

Para implementar a nova funcionalidade de cadastro (POST), será criada uma branch isolada de feature (feature/adicionar-rota-post), garantindo que a branch principal permaneça estável até que a nova rota esteja testada e validada para o merge.