# Melhor forma de estruturar um projeto React utilizando Vite (minha opinião!)

**Vite** é um empacotador de aplicativos da web que substitui o webpack e o Parcel. Ele é projetado para fornecer uma experiência de desenvolvimento mais rápida e mais leve para os desenvolvedores.

Quando você inicia um novo projeto com Vite, ele cria para você um diretório com uma boa **estrutura inicial** para um sistema em React. Mas, eu acho que essa estrutura inicial não é a ideal para um projeto.

Então, eu vou mostrar a vocês como eu estruturo **meus projetos React utilizando Vite.**

Caso você queira, pode ir acompanhando o repositório do projeto que eu criei para esse tutorial: [vite-template](https://github.com/igorroc/vite-template)

## 🚩 Início do desenvolvimento

Para iniciar um projeto novo, você deve ir para sua pasta raiz, onde será armazenado o projeto (normalmente sua pasta `documentos/`), e executar o comando:

```bash
npm create vite@latest
```

Após isso, você deverá seguir no terminal e escolher o nome do projeto, e o template que deseja utilizar:

```ml
Project Name: » nome-projeto
Select Framework: » react
Select Variant: » js
```

```fix
💡 Dica:  Se você já possui uma pasta para seu projeto, e não quer criar uma pasta dentro da pasta, basta colocar "." no "Project Name":
```

```ml
Project Name: » .
```

Após isso, o projeto será criado, e aqui entra a parte mais importante, as **dependências primordiais** _(que eu acho que são necessárias para um projeto React)_:

-   `React Router Dom` para o roteamento
-   `Iconify` para os ícones
-   `Stitches` para a estilização

```bash
cd nome-projeto
npm install react-router-dom @iconify/react @stitches/react
```

Com isso, o projeto estará pronto para ser desenvolvido.

```bash
npm run dev
```

---

## 📁 Estrutura de arquivos padrão

Agora, vamos ver como eu estruturo meus projetos React utilizando Vite.

```bash
.
├── 📁 public
│    └── // Favicon, logo, etc.
│
├── 📁 src
│    ├── 📁 assets
│    │    └── // Arquivos de imagem, ícones, etc.
│    │
│    ├── 📁 components
│    │    ├── 📁 Header
│    │    │    ├── index.jsx
│    │    │    └── styles.js
│    │    │
│    │    ├── 📁 Componente1
│    │    │    ├── index.jsx
│    │    │    └── styles.js
│    │    │
│    │    └── 📁 Componente2
│    │         ├── index.jsx
│    │         └── styles.js
│    │
│    ├── 📁 pages
│    │    ├── 📁 Home
│    │    │    ├── index.jsx
│    │    │    └── styles.js
│    │    │
│    │    └── 📁 Login
│    │         ├── index.jsx
│    │         └── styles.js
│    │
│    ├── App.jsx
│    │
│    ├── index.css
│    │
│    ├── main.jsx
│    │
│    └── Routes.jsx
│
├── .gitignore
│
├── .prettierrc
│
├── index.html
│
├── package.json
│
└── vite.config.js
```

---

## 📦 Componentes

Existem diversas formas de organizar os componentes. A forma com a qual eu me adaptei melhor, e é mais organizada para futuras alterações é a seguinte:

```bash
📁 components
 └── 📁 NomeDoComponente
      ├── index.jsx
      └── style.js
```

Para criar um componente, basta criar uma pasta com o nome do componente (em [PascalCase](https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case#:~:text=coisasParaFazer%0A%0AidadeDoAmigo%0A%0AvalorFinal-,Pascal,-case)) e dentro dela criar um arquivo `index.jsx` que será o arquivo principal do componente, e um arquivo `styles.js` que será o arquivo de estilização do componente.

Para seguir um padrão de criação de um _Styled Component_ (Stitches) da utilização do `Stitches`, o mesmo deverá seguir a seguinte formatação:

```jsx
Styled + "NomeDoComponente"
```

Para exemplo, vamos criar um componente header:

```jsx
// src/components/Header/index.jsx
import { StyledHeader } from "./styles"

export default function Header() {
	return (
		<StyledHeader>
			<h1>header</h1>
		</StyledHeader>
	)
}
```

```jsx
// src/components/Header/styles.js
import { styled } from "@stitches/react"

export const StyledHeader = styled("header", {
	// Estilos do header
})
```

Fazendo isso, nós conseguimos agora apenas colocar uma classe interna no filho do componente e podemos acessar essa classe pelo `stitches`.

Veja o exemplo:

```jsx
// src/components/Header/index.jsx
import { StyledHeader } from "./styles"

export default function Header() {
	return (
		<StyledHeader>
			<h1 className="title">header</h1>
		</StyledHeader>
	)
}
```

```jsx
// src/components/Header/styles.js
import { styled } from "@stitches/react"

export const StyledHeader = styled("header", {
	// Estilos do header
	".title": {
		// Estilos da classe title
	}
})
```

---

## 📄 Páginas

As páginas seguem o mesmo padrão dos componentes, porém, elas ficam dentro da pasta `pages`.

A diferença entre um componente e uma página é que as páginas são utilizadas para renderizar conteúdo na tela, enquanto os componentes são utilizados para criar blocos de código que podem ser reutilizados em outros projetos.

### 📄 Exemplo

```jsx
// src/pages/Home/index.jsx

import React from "react"

import Header from "../../components/Header"

import { StyledHome } from "./styles"

export default function Home() {
	return (
		<StyledHome>
			<Header />
			<h1>Home</h1>
		</StyledHome>
	)
}
```

```jsx
// src/pages/Home/styles.js

import { styled } from "@stitches/react"

export const StyledHome = styled("div", {
	// Estilos da página
})
```

---

## 🚗 Rotas

As rotas são utilizadas para definir quais páginas serão renderizadas na tela, de acordo com a URL. Para criar rotas, basta criar um arquivo `Routes.jsx` na pasta `src` e dentro dele criar um componente que irá conter as rotas.

Utilizaremos o `react-router-dom` para criar as rotas.

### 🚗 Modelo

```jsx
// src/Routes.jsx

import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}
```

---

## ❌ Arquivos não utilizados

O Vite já cria o projeto com menos arquivos do que o `create-react-app`, porém, ainda assim, existem alguns arquivos que não são utilizados (por mim) e podem ser removidos.

### ❌ Arquivos que podem ser removidos

-   `public/vite.svg`
-   `src/App.css`
-   `src/assets/react.svg`

---

## 📝 Arquivo `index.html`

Algumas alterações para fazer no arquivo `index.html`:

-   Trocar a linguagem do HTML para `pt-BR`
-   Colocar o título da página
-   Colocar o favicon da página

## 📝 Arquivo `App.jsx`

Agora o arquivo `App.jsx` ficará bem mais simples, contendo apenas:

```jsx
// src/App.jsx
import React from "react"

import AppRoutes from "./Routes"

export default function App() {
	return <AppRoutes />
}
```

---

## 🏁 Conclusão

Agora você já sabe como criar um projeto React do zero utilizando o Vite, já sabe como configurar o Stitches para estilizar os componentes e também já sabe como criar rotas para as páginas.

Lembrando que esse é o **meu jeito** de criar um projeto React, você pode criar da forma que achar melhor.

---

## 📚 Referências

-   [Vite](https://vitejs.dev/)
-   [Stitches](https://stitches.dev/)
-   [React Router](https://reactrouter.com/)
-   [React](https://pt-br.reactjs.org/)

---

## 📞 Contato

-   [Github](https://github.com/igorroc)
-   [Email](mailto:igor_roc@hotmail.com.br)
-   [Linkedin](https://www.linkedin.com/in/igorroc/)
-   [Site](https://ilrocha.com/)
