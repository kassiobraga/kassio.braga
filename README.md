# kassiobraga.com.br

Site pessoal de **Kassio Braga**, fundador da [All.Q Agência](https://allq.com.br), construído em [Astro](https://astro.build) com CSS puro (sem framework de CSS). Estética neubrutalista com grid blueprint, molduras grossas, sombra dura e assinatura em pixel art.

## Objetivo

A marca pessoal é atrelada à agência, nunca separada. O site não vende, ele abre porta:

1. Gerar network. Ser lembrado e procurado por parceiros, gestores de marketing e donos de agência.
2. Construir oportunidade e autoridade.
3. Gerar convites para palestra, evento e mentoria.
4. Posicionar a frente de IA da All.Q.

Posicionamento central: **do design à automação, estratégia que vira sistema**. Três camadas que poucos operam juntas: marketing, design e automação de IA.

## Stack

- **[Astro](https://astro.build) 5** com saída estática (`output: 'static'`), sem framework de UI.
- **CSS puro** via tokens (`src/styles/tokens.css`, `src/styles/global.css`), sem Tailwind ou outra lib de CSS.
- **Content Collections** em Markdown para o blog (`src/content/blog`).
- **Sharp** para otimização de imagem em build.
- **JS no cliente ao mínimo**: vanilla, `addEventListener`, sem `onclick` inline (usado só no menu mobile).
- Deploy alvo: **Cloudflare Pages** (build estático em `dist`).

## Estrutura

```
src/
  layouts/Base.astro
  components/
    Nav.astro, Hero.astro, Camadas.astro, Timeline.astro,
    Palestras.astro, Cases.astro, FrenteIA.astro, Conteudo.astro,
    Contato.astro, Footer.astro
    pixel/ (SVGs de pixel art como componentes: PxArrow, PxCorner, PxDivider, PlantaBlueprint)
  pages/
    index.astro        (home, one page, todas as seções)
    blog/index.astro    (lista de artigos)
    blog/[slug].astro   (artigo)
  content/
    blog/ (posts em .md)
    config.ts (schema da collection)
  data/site.ts (dados centrais: contato, redes, vídeo)
  styles/tokens.css, global.css
public/
  img/ (fotos reais otimizadas em webp)
astro.config.mjs
```

Home é página única com rolagem, seções na ordem: Nav, Hero, Três Camadas (`#sobre`), História em timeline (`#historia`), Palestras (`#palestras`), Cases (`#cases`), Frente de IA (`#ia`), Conteúdo, Contato (`#contato`), Footer. Blog é área separada com índice e artigos.

## Seções da home

- **Hero**: posicionamento, chips (Marketing, Design, Automação de IA), CTAs "Convidar para palestra" e "Propor parceria", régua de números (Ads gerenciados, empresas atendidas, anos de experiência, segmentos).
- **Três camadas**: Marketing (SEO técnico, tráfego pago, conteúdo), Design (identidade, web design, landing pages), Automação de IA (n8n, integrações, CRM/chatbot, BI).
- **História**: timeline em quatro fases, da construção civil em Brasília até a fundação da All.Q em janeiro de 2017.
- **Palestras**: seis participações reais (Campus Party Goiás 2022, Webinário E-goi 2022, Brasília Innovation Week 2021, Sebrae DF 2021, Capital Empreendedora 2018, Campus Party Brasília 2017).
- **Cases**: grade de oito logos de clientes reais liberados, mais linha de "relações longas". CRP Tech, IDX Data Centers e UNIFAN seguem bloqueados até aprovação explícita.
- **Frente de IA**: seção técnica sobre micro sistemas B2B, automação em n8n e integrações.
- **Conteúdo**: vitrine dos últimos artigos do blog, vídeo do YouTube e Instagram.
- **Contato**: LinkedIn em destaque, e-mail institucional, WhatsApp como canal secundário.

## Blog

Content collection `blog` com posts em Markdown (`titulo`, `resumo`, `data`, `tag`, `capa`, `rascunho`). Cadência real de um artigo por mês. Posts sem corpo escrito ficam marcados `rascunho: true` e não aparecem no site nem no build até serem publicados.

## Regras de conteúdo

- Nenhum dado, número, data ou logo inventado. O que não está confirmado fica documentado em [VALIDACAO.md](VALIDACAO.md).
- CRP Tech (e CRP Computadores, CRP Tecnologia), IDX Data Centers e UNIFAN não aparecem no site, nem por nome, até aprovação explícita do Kassio.
- Nunca usar travessão em texto visível.
- Nenhum emoji como ícone funcional (ícones via [Lucide](https://lucide.dev), outline).
- Fotos sempre em moldura grossa navy com sombra dura, nunca soltas na página.

## Desenvolvimento

```bash
npm install
npm run dev       # servidor local
npm run build     # build estático em dist/
npm run preview   # preview do build
```

## Documentos do projeto

- [BRIEF-kassiobraga-claude-code.md](BRIEF-kassiobraga-claude-code.md): especificação completa de marca, design system e conteúdo usada para construir o site.
- [VALIDACAO.md](VALIDACAO.md): registro de tudo que precisou (ou ainda precisa) de confirmação do Kassio antes do deploy final, por rodada de revisão.

## Status

Protótipo completo, rodando local e com deploy de teste publicado em `.pages.dev` no Cloudflare Pages. O cutover de produção (apontar o domínio kassiobraga.com.br) ainda não foi feito.
