![Home-farmacia](https://github.com/fern-menezes/projeto_final_bloco_03/blob/main/public/home.png)
# 📌 Sistema de Farmácia com React, TypeScript, Vite

Este projeto é um sistema de farmácia desenvolvido com **React**, **TypeScript** e **Vite**.
O foco dessa aplicação é navegar no menu, cadastrar categorias e produtos, e edita-los e deletar-los.

## 🚀 Tecnologias Utilizadas

- ⚛ **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- 🦕 **TypeScript**: Superset do JavaScript que adiciona tipos estáticos.
- ⚡ **Vite**: Ferramenta de construção rápida e leve para projetos front-end.
- ⚛️ **React Router DOM**: Biblioteca de roteamento para React.
- 🎨 **Tailwind CSS**: Framework utilitário de CSS para estilização.
- 🪄 **Swagger**: Comunicação com a API hospedada no swagger para realização e interação com o CRUD.

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── components/
│   ├── navbar/
│   │   └── Navbar.tsx
│   ├── produtos/
│   │   ├── cardprodutos/
│   │   │   └── CardProdutos.tsx
│   │   ├── deletarprodutos/
│   │   │   └── DeletarProdutos.tsx
│   │   ├── formprodutos/
│   │   │   └── FormProdutos.tsx
│   │   └── listaprodutos/
│   │       └── ListaProdutos.tsx
│   ├── categorias/
│   │   ├── cardcategorias/
│   │   │   └── CardCategorias.tsx
│   │   ├── deletarcategorias/
│   │   │   └── DeletarCategorias.tsx
│   │   ├── formcategorias/
│   │   │   └── FormCategorias.tsx
│   │   └── listacategorias/
│   │       └── ListaCategorias.tsx
├── pages/
│   ├── home/
│   │   └── Home.tsx
│   ├── login/
│   │   └── Login.tsx
│   └── perfil/
│       └── Perfil.tsx
├── App.tsx
├── index.tsx
└── tailwind.config.js
```

---

## 🛠 Instalação

Clone o repositório:

```sh
git clone https://github.com/fern-menezes/farmacia-react.git
```

Navegue até o diretório do projeto:

```sh
cd farmacia-react
```

Instale as dependências:

```sh
yarn install
```

---

## ⚙️ Configuração

### **TypeScript**
Certifique-se de que o arquivo **tsconfig.json** está corretamente configurado para incluir os caminhos e módulos necessários.

### **Vite**
No arquivo **vite.config.js**, configure os aliases de caminho:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

```

---

## 🎯 Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```sh
yarn dev
```

### 📦 Build

Para criar a build de produção:

```sh
yarn build
```
---

## 💡 Contribuição

Se quiser contribuir com o projeto, siga os seguintes passos:

1. 🍴 **Faça um fork do projeto**
2. 🌿 Crie uma nova branch:
   ```sh
   git checkout -b feature/nova-funcionalidade
   ```
3. 📝 Commit suas mudanças:
   ```sh
   git commit -m 'Adiciona nova funcionalidade'
   ```
4. 🚀 Faça push para a branch:
   ```sh
   git push origin feature/nova-funcionalidade
   ```
5. 🔄 Abra um **Pull Request**

---

Feito com ❤️ por [fern-menezes](https://github.com/fern-menezes) ✨

