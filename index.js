const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Letras maiúsculas, minúsculas e números

function gerarSenha() {
  const tamanhoSenha = parseInt(document.getElementById("tamanhoSenha").value);
  let senha = "";

  for (let i = 0; i < tamanhoSenha; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceAleatorio);
  }

  document.getElementById("senhaBox").value = senha;
}

const botaoGerarSenha = document.getElementById("gerarSenhaBtn");
botaoGerarSenha.addEventListener("click", gerarSenha);