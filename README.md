# Iranildo · Site pessoal

`Vite` · `JavaScript` · `CSS` · `Anime.js`

[Rodar localmente](#rodar-o-projeto) · [Estrutura](#onde-mexer) · [Publicação](#publicando-o-site) · [← Todos os projetos](https://github.com/Gurgel011#projetos)

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

- `index.html`: textos, títulos, contato e as tags do `<head>` (SEO, favicon, preview de link);
- `src/main.js`: clubes, vídeos, galeria e interações;
- `src/style.css`: aparência e adaptação para celular;
- `public/assets`: fotos e escudos;
- `public/favicon.svg`, `public/favicon.png`, `public/apple-touch-icon.png`: ícone do site (o número 4, camisa do Iranildo). Pra trocar, edite o SVG e regenere os PNGs no mesmo estilo.

Os itens da carreira usam este formato em `src/main.js`:

```js
['2026', 'Lemense', 'SP', 'lemense']
```

O último valor aponta para `public/assets/clubs/lemense.webp`.

Os vídeos precisam apenas do código do YouTube:

```js
['n2HgEVUm2vU', 'Jogadas e fundamentos']
```

No celular, a timeline de carreira destaca sozinha o clube que está no centro da tela enquanto a pessoa rola a página (substitui o hover, que não existe no toque). É o `IntersectionObserver` perto do fim do `main.js`, ligado à classe `.timeline-item.is-active` no CSS. O carrossel de vídeos também foi ajustado pra centralizar o card ativo no celular (`scroll-snap-align: center` + respiro nas laterais da trilha).

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

## Preview de link (WhatsApp, Instagram, X)

As tags de Open Graph e Twitter Card estão no `<head>` do `index.html`, apontando pra `public/assets/preview.jpg` (1200×630).

**A imagem do preview precisa ser JPEG ou PNG, nunca WebP.** O WhatsApp não processa `og:image` em WebP — ao invés de mostrar a foto grande, ele cai num modo mínimo (só o domínio e o favicon pequeno no canto, sem imagem nenhuma). Foi exatamente isso que aconteceu quando a imagem original estava em `.webp`; trocando pra `.jpg` o preview passou a mostrar a foto normalmente. Se for trocar essa imagem no futuro, exporte em JPEG (ou PNG) e mantenha os `og:image:width`/`og:image:height` batendo com o tamanho real.

## Publicando o site

**Já está no ar.** Hospedado na Netlify:

- URL da Netlify: `iranildo-site.netlify.app`
- Domínio próprio: `iranildo.com.br` (registrado no Registro.br, já conectado ao site na Netlify)
- O domínio usa os servidores DNS da própria Netlify (nameservers `dns1-4.p06.nsone.net`), então qualquer registro DNS novo (subdomínio, e-mail, etc.) deve ser criado direto no painel da Netlify, não no Registro.br.
- `www.iranildo.com.br` redireciona automaticamente para o domínio principal.
- O certificado HTTPS é emitido automaticamente pela Netlify assim que o DNS propaga (pode levar de minutos a algumas horas).

Pra publicar uma atualização depois de mexer no código:

```bash
npm run build
npx netlify-cli deploy --prod --dir=dist
```

A pasta já está linkada ao site certo (arquivo `.netlify/state.json`, que fica de fora do git).
