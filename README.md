# Site do Iranildo

Página pessoal do zagueiro Iranildo Santos. Reúne história, clubes, títulos, vídeos, fotos e contato profissional.

## Rodar o projeto

Requer Node.js 20 ou mais recente.

```bash
npm install
npm run dev
```

O Vite mostra o endereço local no terminal. Para abrir pelo celular, rode:

```bash
npm run dev -- --host 0.0.0.0
```

O computador e o celular precisam estar na mesma rede.

## Onde mexer

- `index.html`: textos, títulos e contato;
- `src/main.js`: clubes, vídeos, galeria e interações;
- `src/style.css`: aparência e adaptação para celular;
- `public/assets`: fotos e escudos.

Os itens da carreira usam este formato em `src/main.js`:

```js
['2026', 'Lemense', 'SP', 'lemense']
```

O último valor aponta para `public/assets/clubs/lemense.webp`.

Os vídeos precisam apenas do código do YouTube:

```js
['n2HgEVUm2vU', 'Jogadas e fundamentos']
```

## Antes de publicar

```bash
npm run build
```

Depois, confira no computador e no celular:

- navegação e textos;
- carrossel de vídeos;
- galeria de fotos;
- escudos dos clubes;
- links de WhatsApp e Instagram.

O projeto não possui backend, formulário ou coleta de dados. Fotografias, telefone e vídeos devem ter autorização do jogador antes da publicação.
