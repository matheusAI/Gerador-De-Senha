const express = require('express');
const app = express();

const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

app.get('/gerarSenha/:tamanhoSenha', (req, res) => {
  const tamanhoSenha = parseInt(req.params.tamanhoSenha) || 12;
  let senha = "";

  for (let i = 0; i < tamanhoSenha; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
  }

  res.json({ senha });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`servidor rodando ${PORT}`);
});
