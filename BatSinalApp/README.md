# 🚨 Bate Sinal App - Desafio DIO

Este projeto foi desenvolvido como parte do **Desafio do Felipão** da [Digital Innovation One (DIO)](https://www.dio.me/), com o objetivo de praticar conceitos fundamentais de desenvolvimento mobile utilizando **React Native**.

---

## 📱 Descrição do Projeto

O **Bate Sinal App** simula um chamado de emergência através de um botão de "bat sinal". O fluxo da aplicação é dividido em duas telas principais:

### 🔹 Tela 1 - Tela Inicial
- Exibe o logo do Batman.
- Um botão com o texto `Activate Bat Signal`.
- Ao clicar no botão, o logo e o botão desaparecem, revelando a tela de formulário.

### 🔹 Tela 2 - Formulário de Contato
- Formulário com os seguintes campos:
  - Nome
  - Telefone para contato
  - Localização atual
  - Observações
- Botão para envio dos dados (simulado via console log).

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/)
- Estilo básico com `StyleSheet` do React Native

---

## 📂 Estrutura de Pastas

```
BatSinalApp/
├── App.js
└── assets/
    └── bat-logo.png
```

---

## ▶️ Como Executar

1. Clone o repositório ou baixe o `.zip`.
2. Navegue até a pasta do projeto:

```bash
cd BatSinalApp
```

3. Instale as dependências (caso esteja usando o React Native CLI):

```bash
npm install
```

4. Execute no emulador ou dispositivo físico:

```bash
npx react-native run-android
# ou
npx react-native run-ios
```

> **Dica:** Caso queira usar o Expo, solicite a versão adaptada para ele.

---

## 📸 Prévia do App

![Tela Inicial](./assets/bat-logo.png)

> A imagem acima representa o logo exibido na tela inicial. Substitua por sua própria arte, se desejar.

---

## 👨‍💻 Autor

Projeto desenvolvido por Rafael PG como parte do desafio da [DIO](https://www.dio.me/).

---

## 📜 Licença

Este projeto está sob a licença MIT.
