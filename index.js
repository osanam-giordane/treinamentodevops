const express = require('express');
const app = express();
const port = 3000;

// Nome da empresa configurável
const nomeEmpresa = 'Minha Empresa';

// Rota principal
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Portal - ${nomeEmpresa}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
        </style>
      </head>
      <body>
        <h1>Bem-vindo ao portal da ${nomeEmpresa}!</h1>
        <p>Estamos aqui para atender você.</p>
      </body>
    </html>
  `);
});

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});