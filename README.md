# API de Geração de Senhas

Esta é uma API simples para gerar senhas aleatórias.

## Como Usar

1. Faça uma requisição GET para o endpoint `/gerarSenha/:tamanhoSenha`, onde `:tamanhoSenha` é o comprimento desejado da senha.
2. Você receberá uma resposta JSON com a senha gerada.

**Exemplo de requisição:** 
`GET/gerarSenha/12` 
**Exemplo de resposta:**
```json
{
  "senha": "f2AB7k5LpR9W"
}
```
# Como Rodar o Servidor Localmente

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3.Instale as dependências com o comando `npm install`.
4. Inicie o servidor com o comando `npm start`.

# Exemplos de Requisição

Você pode fazer requisições para a API usando ferramentas como cURL ou Postman. Aqui estão alguns exemplos:

```bash
# Gera uma senha com 8 caracteres
curl http://localhost:3000/gerarSenha/8

# Gera uma senha com 12 caracteres
curl http://localhost:3000/gerarSenha/12
```
