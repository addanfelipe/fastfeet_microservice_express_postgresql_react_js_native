<h1 align="center">
  <p><img src='./img/logo.png' height="44"></p>
  📦 FastFeet
  <p>Um serviço de gestão de encomendas e entregadores</p>
</h1>

<h1 align="center">
  <p align="center">
    <img src='./img/desktop.gif'>
    <img src="./img/mobile.gif" height="310">
  </p>
    
</h1>


### 📜 Sobre
Este é um projeto de um serviço de gestão e acompanhamento de encomendas para uma transportadora fictícia. Construído com as tecnologias mais populares do mundo Javascript, este repositório contem microsserviços APIs REST (Node.js) como backend, uma aplicação em ReactJS como frontend e um app mobile em React Native.

As aplicações em **Node.js** são **APIs REST** escritas em **Node.JS** que servem dados tanto ao frontend quanto ao mobile. Possuindo integração com o **Sentry** para monitoramento de erros em tempo real.

A aplicação em **ReactJS** (frontend) é para o administrador **cadastrar destinatários, entregadores e encomendas**. Assim podendo direcionar e fazer gestão das entregas e outros registros.

A aplicação em **React Native** é para o entregador visulizar as entregas e trabalhar encima delas. Podendo filtrar entre pendentes e entregues, cadastrar problemas que ocorreram durante a entrega e confirmar a entrega enviando uma foto da assinatura.

### 🔽 Requisitos
1. Ter o **NodeJs** e o **Yarn** instalado
2. Ter os containers **Docker** em execução
3. Um dispositivo ou emulador **Android** conectado ao computador
4. **Reactotron** rodando na porta 9090 (**Opcional**)

### :rocket: Começando
1. ``https://github.com/addanfelipe/fastfeet_microservice_express_postgresql_react_js_native.git``
2. ``cd fastfeet_microservice_express_postgresql_react_js_native``

### :rocket: Iniciando com docker
1. ``docker-componse up -d``

### :rocket: Iniciando com o auth_backend
1. ``cd auth_backend``
2. ``yarn``
3. ``Criar o arquivo .env com base no .env.example.docker``
4. ``yarn sequelize db:migrate``
5. ``yarn sequelize db:seed:all``
6. ``yarn dev``

### :rocket: Iniciando com o delivery_backend
1. ``cd delivery_backend``
2. ``yarn``
3. ``Criar o arquivo .env com base no .env.example.docker``
4. ``yarn sequelize db:migrate``
5. ``yarn dev``

### :rocket: Iniciando com o problem_backend
1. ``cd problem_backend``
2. ``yarn``
3. ``Criar o arquivo .env com base no .env.example.docker``
4. ``yarn sequelize db:migrate``
5. ``yarn dev``

### :rocket: Iniciando com o analytics (Analisador de desempenho dos MS)
1. ``cd analytics``
2. ``yarn``
3. ``yarn feed`` (Deve ser definido o endpoint que será analisado na função main em feed/index.js)


### 💻 Iniciando com o Front-end 
1. ``cd frontend``
2. ``yarn``
3. ``yarn start``

Existe um usuário administrador padrão: admin@fastfeet.com / 123456

### 📱Iniciando com o Mobile (Apenas Android)
1. ``cd mobile``
2. ``yarn``
3. ``adb reverse tcp:9090 tcp:9090 (Reactotron)``
4. ``adb reverse tcp:3333 tcp:3333``
5. ``react-native start``
6. ``react-native run-android``

### 🧰  Ferramentas utilizadas
- ⚛️ **ReactJs** - Biblioteca Javascript para criar interfaces de usuário.
- ⚛️ **React Native** - Framework para criar apps nativos usando React.
- 💅 **Styled Components** - Biblioteca Javascript pra estilizar componentes.
- 🔁 **Redux** - Biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo.
- 🔂 **Redux Saga** - Biblioteca Javascript que torna os efeitos colaterais do aplicativo mais faceis de gerenciar.
- 📛 **Sentry** - Plataforma para monitoramento de erros e notificação em tempo real.
- 📷 **React-Native-Camera** - Biblioteca React Native para manusear a camera dentro do app mobile. 

<hr>
<p align="center">Base inicial a partir do repositório https://github.com/GustavoBlaze/fastfeet</p>
