# Backend para Upload de Imagem com Multer e MongoDB

Este projeto implementa um backend para upload de imagens utilizando **Multer** para o processamento de arquivos e **MongoDB** para o armazenamento dos dados das imagens. As imagens são salvas em uma pasta interna do servidor, enquanto as informações da imagem, como nome e caminho, são armazenadas no banco de dados MongoDB.

## 📋 Funcionalidades

- **Upload de Imagens**: Permite o envio de imagens para o servidor.
- **Armazenamento Local**: As imagens são salvas em uma pasta interna no servidor.
- **Armazenamento no MongoDB**: Os dados da imagem, como o nome e o caminho, são armazenados no MongoDB.
- **Validação de Arquivos**: Verificação do tipo e tamanho do arquivo para garantir que apenas imagens válidas sejam enviadas.

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js
- **Middleware de Upload**: Multer
- **Banco de Dados**: MongoDB
- **Armazenamento de Arquivos**: FilePath (pasta interna do servidor)
- **ORM para MongoDB**: Mongoose

