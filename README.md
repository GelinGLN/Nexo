# Nexo — Contact Manager

<p align="center">
    <img src="http://img.shields.io/static/v1?label=STATUS&message=INTERROMPIDO&color=red&style=for-the-badge"/>
    <img src="http://img.shields.io/static/v1?label=JavaScript%20&message=Based&color=yellow&style=for-the-badge&logo=javascript"/>
    <img src="https://img.shields.io/static/v1?label=node&message=enviroment&color=green&style=for-the-badge&logo=Node.js"/>
    <img src="http://img.shields.io/static/v1?label=License&message=UNLICENSED&color=green&style=for-the-badge"/>
</p>

Nexo é um gerenciador de contatos que une todas as suas necessidades em apenas um aplicativo, desde ver as informações do contato (telefone, email ...) até abrir a conversa do WhatsApp com o contato ou enviar um email. Tudo oque você quiser, sem precisar abrir mais de um aplicativo.

A projeto nasceu da vontade de ter todos os contatos, e todas as ferramentas, num único aplicativo de computador. Se precisa enviar uma mensagem para um cliente importante ou um amigo distante, você pode fazer isso com dois cliques! Prefere um email? Ótimo, também temos isso (no mesmo app, no mesmo lugar). Se, além disso tudo, quiser ver o instagram daquela pessoa, também consegue fazer isso com o Nexo!

Por que abrir tantos aplicativos, se o Nexo deixa tudo no mesmo lugar?!

---

## Funcionalidades

- **Listar contatos:** visualização da lista principal
- **Criar contato:** formulário para novo contato
- **Editar contato:** alterar dados existentes
- **Excluir contato:** remover contatos
- **Busca:** campo de pesquisa para filtrar contatos
- **Social:** Botões que te redirecionam diretamente para:
    - Instagram
    - WhatsApp
    - Email

---

## Pré-requisitos

- **[Node.js](https://nodejs.org/en/download/)**
- **[npm](https://www.npmjs.com/)**
- **[Electron](https://www.electronjs.org/)**
- **[Electron Forge](https://www.electronforge.io/)**

Instale dependências com:

```bash""
npm install
```

---

## Último lançamento 🚀

***`Pendente`***

---

## Como executar :arrow_forward:

No terminal, clone o projeto:

```bash
git clone https://github.com/Joao-Pedro-Monteiro/Nexo.git
```

...

- Modo desenvolvimento (com watch, se necessário):

```bash
npm run indev
```

...

- ***Iniciar via Electron Forge (padrão):***

```bash
npm start
```

...

- ***Empacotar / gerar instaladores:***

>! É necessário o Electron Forge instalado para rodar o comando a seguir !

```bash
npm run make
```

O comando acima empacota e gera o executável do aplicativo Electron. Todo este processso é realizado pelo *Electron Forge*.
Encontre a documentação de empacotamento e distribuição do Electron Forge [clicando aqui](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging)

**Observação:** os scripts acima refletem o `package.json` do projeto.

---

## Configuração :gear:

- Arquivo de configuração principal: [src/config/config.json](src/config/config.json)
- Helpers de configuração em: [src/config/config.js](src/config/config.js)
- Os contatos são carregados de [src/renderer/contacts.json](src/renderer/contacts.json).

## Estrutura principal do projeto :file_folder:

- **index.js** — entrada do Electron (janela principal) ([index.js](index.js))
- **src/renderer/pages/** — páginas HTML da UI ([src/renderer/pages](src/renderer/pages))
- **src/renderer/script/** — scripts do frontend (CRUD, navegação)
- **src/renderer/behavior/** — comportamento do frontend
- **src/config/** — configuração do aplicativo
- **src/data/** — ícones e recursos estáticos

## Licença :scroll:

(*`UNLICENSED`*)

---
Copyright :copyright: 2025 - Nexo
