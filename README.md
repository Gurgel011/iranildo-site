# Iranildo — uma vida pelo futebol

Site biográfico de **Iranildo Santos da Silva**, criado para registrar sua trajetória, clubes, títulos e melhores momentos no futebol.

> **Status:** desenvolvimento. O repositório é privado e o site ainda não foi publicado.

## Visão geral

O projeto é uma página única, responsiva e orientada a conteúdo. Não possui backend, banco de dados, painel administrativo ou coleta de informações do visitante.

Principais seções:

- apresentação e perfil físico;
- biografia;
- linha do tempo dos clubes;
- títulos conquistados;
- vídeos do YouTube;
- galeria de fotografias;
- contato profissional.

## Tecnologias

- [Vite](https://vite.dev/): servidor local e build de produção;
- JavaScript nativo: conteúdo dinâmico e interações;
- [Anime.js](https://animejs.com/): animações de entrada e transições;
- CSS nativo: layout, identidade visual e responsividade;
- WebP: fotografias e escudos otimizados.

## Executar localmente

Requisitos: Node.js 20 ou superior e npm.

```bash
git clone https://github.com/Gurgel011/iranildo-site.git
cd iranildo-site
npm install
npm run dev -- --host 0.0.0.0 --port 4173 --strictPort
```

No computador, abra `http://localhost:4173`.

No celular conectado à mesma rede, use `http://IP-DO-COMPUTADOR:4173`. Para descobrir o IP no Linux:

```bash
hostname -I
```

O terminal deve permanecer aberto. Para encerrar o servidor, pressione `Ctrl+C`.

## Comandos

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run build` | Gera a versão otimizada em `dist/`. |
| `npm run preview` | Visualiza localmente o build de produção. |

## Arquitetura

```text
iranildo-site/
├── index.html             # Estrutura, textos fixos, SEO e redes sociais
├── src/
│   ├── main.js            # Carreira, vídeos, galeria e interações
│   └── style.css          # Identidade visual e responsividade
├── public/assets/
│   ├── clubs/             # Escudos dos clubes
│   ├── preview.webp       # Capa de compartilhamento do futuro link
│   └── *.webp             # Fotografias otimizadas
├── package.json           # Scripts e dependências
└── README.md              # Documentação do projeto
```

Fluxo da página:

```text
index.html → main.js → dados e interações
           → style.css → apresentação responsiva
           → public/assets → imagens e escudos
```

A arquitetura permanece propositalmente simples. Um framework, backend ou sistema de gerenciamento de conteúdo só deve ser adicionado se surgir uma necessidade concreta.

## Alterar conteúdo

### Biografia, títulos e contato

Edite diretamente o arquivo `index.html`.

O telefone do WhatsApp deve permanecer no formato internacional, sem espaços ou símbolos:

```html
https://wa.me/5527992470488
```

### Clubes

Edite o array `career` em `src/main.js`:

```js
['2026', 'Lemense', 'SP', 'lemense']
```

Cada item segue a ordem `[temporada, clube, estado, nome do arquivo do escudo]`. O escudo correspondente deve existir em `public/assets/clubs/lemense.webp`.

### Vídeos

Edite o array `videos` em `src/main.js`, usando somente o identificador do YouTube:

```js
['n2HgEVUm2vU', 'Jogadas e fundamentos']
```

### Galeria

Adicione a imagem em `public/assets/` e inclua o nome do arquivo no array `gallery`, em `src/main.js`.

## Imagens

Regras adotadas:

- formato WebP;
- até **150 KB por arquivo**;
- nomes descritivos, em minúsculas e sem espaços;
- texto alternativo nas imagens exibidas;
- `loading="lazy"` fora da primeira tela;
- `preview.webp` na proporção de compartilhamento social.

Verifique se alguma imagem ultrapassou o limite:

```bash
find public/assets -type f -size +150k -print
```

## Integrações externas

- YouTube: vídeos incorporados com `youtube-nocookie.com`;
- WhatsApp: link direto para contato profissional;
- Instagram: link para `@iran96_s`;
- Google Fonts: famílias Barlow Condensed e Inter.

O site não envia formulários, não usa cookies próprios e não armazena dados pessoais de visitantes.

## Responsividade e acessibilidade

O layout foi validado em desktop e celular. O projeto inclui:

- navegação adaptada para telas pequenas;
- suporte a `prefers-reduced-motion`;
- textos alternativos nas imagens;
- rótulos acessíveis nos controles;
- foco em contraste e legibilidade;
- controles nativos nos vídeos incorporados.

## Validação

Antes de cada entrega, execute:

```bash
npm run build
```

Também confira manualmente:

1. página inicial em desktop e celular;
2. links do menu;
3. linha do tempo e escudos;
4. carrossel e reprodução dos vídeos;
5. abertura e fechamento da galeria;
6. botões do WhatsApp e Instagram;
7. ausência de imagens acima de 150 KB.

## Fontes de conteúdo

- Perfil e histórico: [oGol](https://www.ogol.com.br/jogador/iranildo/1014158);
- fotografias, biografia e contato: materiais fornecidos pelo jogador;
- escudos: páginas dos clubes, oGol, PlaymakerStats, Wikimedia Commons e SeekLogo.

Os escudos pertencem aos respectivos clubes. As fotografias devem ter autorização confirmada antes da publicação pública.

## Checklist para publicação

- [ ] Validar oficialmente temporadas, clubes e títulos;
- [ ] confirmar autorização para fotografias e vídeos;
- [ ] confirmar a exposição pública do telefone;
- [ ] revisar textos e ortografia com o jogador;
- [ ] definir domínio e hospedagem;
- [ ] configurar URL absoluta de `og:image`;
- [ ] testar a capa do link no WhatsApp;
- [ ] executar `npm run build`;
- [ ] testar em Android, iPhone e desktop;
- [ ] aprovar a versão final antes de tornar o repositório ou site público.
