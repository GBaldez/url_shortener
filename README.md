# Url Shortener
Api para realizar o encurtamento de urls, construído com Node.Js, TypeScript e MongoDB.

## Para Utilizar A Aplicação
* Primeiro passo, instale as dependências do projeto. Rode o comando abaixo no seu terminal:
```
npm install
```
* Segundo. Será preciso adicionar a sua string de conexão do seu banco de dados no MongoDB. Edite o arquivo `Constants.ts` que está na pasta `configs` e indique-a em MONGO_CONNECTION:

![image](https://user-images.githubusercontent.com/83733139/162865947-e891e4fc-1c5b-4a99-a573-f35cdeca6b73.png)

Para mais informações sobre como conectar seu banco de dados visite o site do [MongoDB](https://www.mongodb.com/docs/atlas/connect-to-database-deployment/#connect-to-a-cluster)


* Terceiro. Por ser uma aplicação feita com TypeScript também será preciso que digite o comando seguinte em seu terminal.
```
npm run build
```
* E por fim inicie a aplicação com o comando:
```
npm run dev
```
### Endpoints
#### Para encurtar a url
Post / ```http:localhost:5000/shorten```

O Objeto JSON enviado para API deve seguir este padrão:
```json
{
  "originURL": "url"
}
```
## Agradecimentos
[Digital Innovation One](https://www.dio.me/)

[Alexia Dorneles](https://www.linkedin.com/in/alexiapereira/)

Feito com carinho ♥
