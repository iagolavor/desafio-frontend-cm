# varejim-produto-web
Desafio de desenvolvimento front-end de um crud de produtos e seções.

## Ambiente de Desenvolvimento

Microsoft Windows 10 versão 1909(Compilação do Sistema Operacional 18363.1316)


## Instalação

```
npm install
```

## Executar o Projeto

Back-end | Front-end
---------|----------
cd ../varejim-produto-service | cd ../varejim-produto-web
npm install | npm install
npm run dev | npm run serve

## Toolkits de desenvolvimento

[Vuetify v2.4.3(latest)](https://vuetifyjs.com/en/)

[Vue-router](https://router.vuejs.org/)

[Axios](https://github.com/axios/axios)

## Desenvolvimento bônus

1. O back-end nas rotas delete e put estava com um erro. O express enviava no res.send() um número inteiro, que era interpretado como um status HTTP e isso causava a função a entrar no catch e enviar erro código 500. Apenas dei um JSON.stringify() na resposta do serviço e está funcionando normalmente(felizmente, o AXIOS já transforma todo data em JSON então nada mudou nos serviços que já tinha feito).
