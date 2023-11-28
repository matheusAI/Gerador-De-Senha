const express = require("express");
const app = express;

const PORT = process.env.PORT || 3341;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function gerarSenha(tamanhoSenha) {
  let senha = "";

  for (let i = 0; i < tamanhoSenha; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
  }
  return senha;
}

app.use(express.json());

app.post("/api/gerarSenha", (req, res) => {
  const tamanhoSenha = req.body.tamanhoSenha || 12; // tamanho padrão de senha

  const senha = gerarSenha(tamanhoSenha);
  res.json({ senha });
});
