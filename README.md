# Trabalho3 - Programação Móvel

### Ideia Central do projeto: desenvolvimento de um aplicativo intitulado Autizando.


O AUTIZANDO tem o propósito de tornar a consulta de pessoas portadoras do Transtorno do Espectro Autista - TEA acessível e ágil, concentrando todas as informações necessárias para encontrar o especialista mais próximo em uma única ferramenta. A ferramenta trata-se de um aplicativo mobile, onde poderão ser cadastrados pessoas portadoras do TEA e profissionais especialistas em diversas áreas, como por exemplo, psiquiatra, psicólogo, etc. Para que o autista consiga localizar o profissional, ambos deverão inserir sua localidade, para que assim o autista possa ser atendido por aquele mais próximo.

Partindo do pressuposto de Localidade, desenvolvemos uma pequena aplicação, utilizando a API do IBGE, que lista todas as localidades do Brasil a partir dos estados. (Esse é considerado apenas um módulo do aplicativo a ser desenvolvido.)

Porém, vale ressaltar que a equipe entrou em discussão para que seja utilizada a própria API do google maps, objetivando o uso de geolocalização para facilitar o ponto de encontro.

Abaixo descrevemos, em tópicos, informações relevantes sobre a aplicação, bem como os passos necessários para roda-la na máquina de pessoas externas.

## Sobre a aplicação

O objetivo da aplicação é localizar os municípios a partir da [API do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades#api-Municipios)

A aplicação consiste em duas telas onde a primeira tela exibe todos os estados do Brasil. Ao clicar no estado, é direcionado para os municípios do determinado estado.

## Layout Mobile
![img1](https://user-images.githubusercontent.com/71051791/133912905-ad07b272-77ff-4807-a565-378752da2998.jpeg)

![img2](https://user-images.githubusercontent.com/71051791/133912909-962b758f-ef85-484a-a77e-108ec8e522b9.jpeg)

## Tecnologias Utilizadas

### Front end
- CSS
- TypeScript
- React Native
- Expo
### Back end
- TypeScript
- JavaScript

## Implantação e Produção 
- API: IBGE

## Como executar a aplicação

Requisitos: 

- **expo** v4.4.7 ou superior

**1. Clone o repositório**
~~~
https://github.com/IanoMaciel/trabalho3-pm.git
~~~

**2. Entre no diretório** 
~~~
cd trabalho3-pm
~~~

**3. Execute utilizando o comando abaixo**
~~~
expo start
~~~
