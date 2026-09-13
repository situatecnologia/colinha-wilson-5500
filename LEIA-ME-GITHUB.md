# V2.4 — Upload manual no GitHub Pages

Esta pasta contém a versão limpa da V2.4.

## Estrutura que deve ficar na RAIZ do repositório

- index.html
- cadastro-candidatos.js
- manifest.webmanifest
- service-worker.js
- .nojekyll
- assets/
  - candidatos/
    - arquivos JPG dos candidatos

## IMPORTANTE

Não envie a pasta `V2.4_GitHub_Manual` inteira para dentro do repositório.
Abra a pasta e envie o CONTEÚDO dela para a raiz do repositório.

O arquivo `index.html` precisa aparecer diretamente na página principal do repositório,
ao lado de `cadastro-candidatos.js`.

## GitHub Pages

Em:
Settings > Pages

Use:
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

## Se já existir versão anterior no repositório

O ideal é apagar os arquivos antigos da aplicação e substituir pelo conteúdo deste pacote.
Não use os antigos arquivos `data/base-*.js` ou `data/photos-*.js`.
Esta versão usa:
- a arte-base embutida diretamente em `index.html`
- fotos JPG reais na pasta `assets/candidatos/`

Isso reduz a chance de falha de carregamento do preview e das fotografias.
