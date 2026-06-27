# kassiobraga.com.br, Brief de Execução Autônoma

Especificação única para o Claude Code construir o site pessoal de Kassio Braga em modo autônomo. Autocontido. Não depende de nenhuma skill externa. Tudo que o agente precisa decidir sobre marca, layout e conteúdo está aqui.

Regra geral de comunicação e código: nunca usar travessão em nenhum texto visível. Usar vírgula, ponto, dois pontos ou parênteses.

---

## 0. Como acionar

1. Criar repositório novo, por exemplo `kassiobraga-site`.
2. Salvar este arquivo como `BRIEF.md` na raiz e usá-lo como fonte de verdade do projeto.
3. Colocar o protótipo aprovado `kassiobraga-hero.html` na raiz como `referencia-visual.html`. Ele é a fonte de verdade visual do hero e da seção Três Camadas. Replicar exatamente esse estilo nas demais seções.
4. Prompt inicial sugerido para o Claude Code: "Leia BRIEF.md e referencia-visual.html. Construa o site completo em Astro conforme a especificação, em modo autônomo. Não invente dados. Gere VALIDACAO.md com tudo que precisar de confirmação. Não faça deploy, pare no protótipo pronto rodando local."

Saída esperada: site Astro completo, rodando em `npm run dev`, com todas as seções e o blog, mais um `VALIDACAO.md`. Sem deploy em produção, isso só acontece depois da validação com o Kassio.

---

## 1. Objetivo e prioridade

Site pessoal de Kassio Braga, fundador da All.Q Agência. A marca pessoal é atrelada à agência, nunca separada.

Prioridade de objetivos, em ordem:
1. Gerar network. Ser lembrado e procurado por parceiros, gestores de marketing e donos de agência.
2. Oportunidade e autoridade.
3. Palco, convites para palestra, evento e mentoria.
4. Posicionar a frente de IA.

Consequência prática: o site não pede venda, ele abre porta. Os CTAs principais são "convidar para palestra" e "propor parceria". LinkedIn em destaque. WhatsApp de venda fica fora do topo.

Posicionamento central: do design à automação, estratégia que vira sistema. Kassio resolve negócio em três camadas que poucos operam juntas, marketing, design e automação de IA.

---

## 2. Stack e estrutura

Stack: Astro com CSS puro via tokens, sem framework de CSS pesado. Deploy alvo Cloudflare Pages. Blog em content collections com Markdown.

Por que CSS puro e não Tailwind: o estilo é neubrutalista custom e a régua anti template pede HTML e CSS enxutos. Manter leve.

Estrutura de arquivos:

```
src/
  layouts/Base.astro
  components/
    Nav.astro
    Hero.astro
    Camadas.astro
    Timeline.astro
    Palestras.astro
    Cases.astro
    FrenteIA.astro
    Conteudo.astro
    Contato.astro
    Footer.astro
    pixel/ (SVGs de pixel art como componentes)
  pages/
    index.astro        (one page com todas as seções na ordem da seção 4)
    blog/index.astro    (lista de artigos)
    blog/[slug].astro   (artigo)
  content/
    blog/ (.md)
    config.ts (schema da collection)
  styles/
    tokens.css
    global.css
public/
  img/ (fotos reais otimizadas)
  fonts/ (opcional, se hospedar fontes local)
astro.config.mjs
```

Home é uma página única com rolagem, seções na ordem da seção 4. Blog é página separada com índice e artigos. A âncora de navegação usa os ids: `#sobre`, `#historia`, `#palestras`, `#cases`, `#ia`, `#contato`.

JS no cliente: evitar ao máximo. Se precisar, por exemplo menu mobile, usar vanilla com `var` e `addEventListener`, nunca `onclick` inline.

---

## 3. Sistema de design

### Tokens (colar em `tokens.css`)

```css
:root{
  --paper:#EAEEF6;     /* fundo papel azul claro */
  --pastel:#A6C1E3;    /* azul pastel chapado */
  --pastel-2:#CBD9EE;  /* azul pastel claro, chips */
  --navy:#0A1730;      /* tinta, bordas grossas, sombra dura */
  --pop:#0070FE;       /* unico saturado, link e CTA */
  --jet:#2F2F2F;       /* corpo de texto */
  --white:#FFFFFF;
  --title:'Bricolage Grotesque',sans-serif;
  --mono:'Space Mono',monospace;
  --body:'Albert Sans',sans-serif;
}
```

Nada de amarelo. Nada de cor fora dessa paleta. Sem gradiente roxo ou azul genérico.

### Fontes

Google Fonts. Bricolage Grotesque nos títulos (600 e 800), Space Mono em kickers, labels, datas e legendas (400 e 700), Albert Sans no corpo (400, 500, 600).

```html
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=Space+Mono:wght@400;700&family=Albert+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

### Fundos

Base papel com grid blueprint sutil em todas as seções:

```css
background-color:var(--paper);
background-image:
  linear-gradient(rgba(10,23,48,0.04) 1px,transparent 1px),
  linear-gradient(90deg,rgba(10,23,48,0.04) 1px,transparent 1px);
background-size:32px 32px;
```

Nas seções técnicas (Frente de IA, Cases), reforçar o blueprint: grid mais visível ou painel navy com grid branco a 0.06, legendas e cotas em mono.

### Componentes, gramática neubrutalista

Isto é proposital, não é vício de IA:
- Bordas grossas, 3px sólidas em navy.
- Sombra dura deslocada, sem blur. Ex: `box-shadow:8px 8px 0 var(--navy)` ou `4px 4px 0 var(--pop)`.
- Cantos quase retos, raio 2px a 4px no máximo.
- Botão: borda 3px navy, label em mono maiúsculo, sombra dura. Primário fundo navy texto branco com sombra pop. Fantasma fundo branco texto navy com sombra navy. No hover, encolher a sombra e deslocar 2px.
- Chip e tag: borda 2px navy, fundo pastel ou papel, texto mono maiúsculo.
- Marcador de número: quadrado navy preenchido, número em Bricolage branco, cantos retos.
- Kicker de seção: barrinha pop de 34px mais texto mono maiúsculo pop com tracking.

### Tratamento de foto

Foto nunca solta na página, sempre em moldura grossa navy com sombra dura. Dois tratamentos:
- Seções pastel: foto em cor cheia, leve `saturate(.92) contrast(1.02)`.
- Seções blueprint: foto esfriada, com legenda mono em barra navy embaixo, marcas de corte pop nos cantos e rótulo `fig.NN`.

### Pixel art, assinatura retrô

Camada decorativa oficial, azul `#0070FE`, sem amarelo. Módulo de 16px, quadrado de 14px, gap de 2px. Usar com parcimônia como assinatura, em cantos, divisores e CTAs. Não espalhar aleatório.

Canto pixelado (acento de canto):
```html
<svg width="46" height="46" viewBox="0 0 46 46" shape-rendering="crispEdges" aria-hidden="true">
  <g fill="#0070FE"><rect x="0" y="0" width="14" height="14"/><rect x="16" y="0" width="14" height="14"/><rect x="0" y="16" width="14" height="14"/></g>
</svg>
```

Seta pixel (dentro de CTA, fill branco sobre navy):
```html
<svg viewBox="0 0 126 46" shape-rendering="crispEdges" aria-hidden="true">
  <g fill="#FFFFFF">
    <rect x="0" y="16" width="14" height="14"/><rect x="16" y="16" width="14" height="14"/><rect x="32" y="16" width="14" height="14"/><rect x="48" y="16" width="14" height="14"/><rect x="64" y="16" width="14" height="14"/><rect x="80" y="16" width="14" height="14"/>
    <rect x="96" y="0" width="14" height="14"/><rect x="112" y="16" width="14" height="14"/><rect x="96" y="32" width="14" height="14"/>
  </g>
</svg>
```

Linha com pixel (divisor de seção):
```html
<svg viewBox="0 0 206 48" shape-rendering="crispEdges" aria-hidden="true">
  <rect x="0" y="24" width="158" height="14" fill="#0070FE"/>
  <rect x="160" y="8" width="14" height="14" fill="#0070FE"/>
  <rect x="176" y="24" width="14" height="14" fill="#0070FE"/>
</svg>
```

### Ícones

Lucide apenas, outline, traço consistente. Nunca emoji como ícone funcional. LinkedIn pode usar o glifo de marca em SVG.

---

## 4. Conteúdo por seção

Ordem na home. Todo texto abaixo é real e aprovado, exceto o que estiver marcado com `[confirmar]`. Não inventar nada além disto. O que faltar, deixar marcado e listar no VALIDACAO.md.

### 4.1 Nav
Marca à esquerda: pixel azul mais "Kassio Braga" em Bricolage, com "ALL.Q AGÊNCIA" em mono pequeno embaixo. Links: Sobre, História, Cases, Palestras, IA, Contato. À direita: ícone do LinkedIn em destaque mais botão "Propor parceria". Sticky no topo com borda inferior grossa navy.

### 4.2 Hero
Replicar do `referencia-visual.html`.
- Kicker: "Portfólio técnico · 2026"
- Título: "Do design à automação." quebra "Estratégia que vira sistema." (segunda linha em pop).
- Lede: "Construo crescimento previsível para negócios B2B unindo três camadas que poucos operam juntas. Comecei no design, montei a All.Q em SEO e tráfego, e hoje desenho sistemas de automação e IA."
- Chips: Marketing, Design, Automação de IA.
- CTAs: "Convidar para palestra" (primário, com seta pixel), "Propor parceria" (fantasma).
- Foto: `palco.jpg` em moldura blueprint, legenda "palco · campus party go" e "2022", canto pixelado azul, rótulo `fig.01`.
- Régua de números, fonte mono e Bricolage: +R$2Mi em Ads gerenciados, +500 empresas atendidas, +10 anos de experiência, +15 segmentos atendidos.

### 4.3 As três camadas (id sobre)
Replicar do `referencia-visual.html`. Ficha técnica em linhas, não três colunas iguais. Marcador navy 01, 02, 03.
- 01 Marketing. "Investimento que vira receita previsível." SEO técnico, tráfego pago em Google, Meta e Microsoft, conteúdo orientado a oportunidade real de busca. Medido por CAC, LTV e previsibilidade, nunca por vaidade. Tags: SEO técnico, Google Ads, Meta Ads, Conteúdo.
- 02 Design. "Marca e interface que sustentam a estratégia." Carreira que começou na prancheta. Do logo à landing page, design que faz a estratégia converter. Tags: Identidade, Web design, Landing pages, Criativos.
- 03 Automação de IA. "Sistemas que escalam o comercial sem inchar o time." Micro sistemas B2B, automação em n8n, integração entre site, CRM e ferramentas de venda. Tags: Automação n8n, Integrações, CRM e chatbot, BI.

### 4.4 História em timeline (id historia)
Seção forte de blueprint. Timeline vertical com marcadores de ano em mono, linhas de cota e moldura nas fotos. Três fases:
- Fase 01, A base sólida. Cerca de 8 anos na construção civil, a base de método, prazo e gestão de obra que sustenta tudo depois. `[período exato a confirmar]`
- Fase 02, A transição tech. Entrada no setor de tecnologia, passagem por Softplan e PSA Sistemas, primeiros eventos e palestras. `[período exato a confirmar]`
- Fase 03, A All.Q. Fundação da agência, de AllQuadrado a All.Q Agência, atuando desde 2017 em B2B de construção, indústria e tecnologia.

Puxar o texto detalhado de cada fase do site atual `kassiobraga.com.br`, corrigindo o problema de bilíngue grudado. Manter só português nesta versão.

### 4.5 Palestras e autoridade (id palestras)
Bloco que convence organizador de evento. Cada item com foto, nome, local e ano, em moldura blueprint com legenda mono.
- Campus Party GO, 2022.
- Mentoria no Sebrae DF. `[data a confirmar]`
- Mentor no Brasília Innovation Week, programa BIOTIC. `[data a confirmar]`
- Webinário E-goi. `[data a confirmar]`
CTA da seção: "Convidar para palestra".

### 4.6 Cases e marcas (id cases)
Grade de logos de clientes mais a régua de números. Tratamento blueprint, logos em cinza com hover.
- Categoria A para destacar: Tubos ABC, Lumi Software, PSA Sistemas, Imperador Alimentos.
- ATENÇÃO, conteúdo sensível: CRP Tech (e as três empresas, CRP Computadores, CRP Tecnologia, IDX Data Centers) e UNIFAN têm regras próprias de marca. Não publicar logo, nome ou case dessas marcas sem aprovação explícita do Kassio. Deixar placeholder e marcar no VALIDACAO.md.
- Demais logos: usar somente os que o Kassio liberar. Listar os encontrados no site atual e perguntar.

### 4.7 Frente de IA (id ia)
Seção mais técnica, blueprint pesado, grid visível, marcadores de cota. Posiciona Kassio na vanguarda.
Texto base: "A próxima camada da All.Q. Micro sistemas sob medida para negócios B2B, automação de processos em n8n, integração entre site, CRM e ferramentas de venda, e catálogos e painéis que conectam o que as plataformas não conectam sozinhas." CTA: "Falar sobre automação". `[validar texto final com Kassio]`

### 4.8 Conteúdo (id conteudo)
Vitrine dos três últimos artigos do blog mais um vídeo do YouTube. Cards de artigo com data em mono, título Bricolage e tag. Embed do vídeo `[URL do vídeo a confirmar]`.

### 4.9 Contato (id contato)
Separado por intenção, network primeiro. Três caminhos com ícone Lucide: Palestra, Parceria, Mentoria. LinkedIn em primeiro lugar e maior. 
- LinkedIn: `linkedin.com/in/kassiobraga` `[handle a confirmar]`
- E-mail: `[definir, contato@allq.com.br institucional ou e-mail pessoal]`
- WhatsApp: secundário, 62 98227-3885, sem cara de venda.

### 4.10 Footer
Tie com a agência. Marca, tagline "Menos Vaidade, Mais Resultados", links de seção, redes, e crédito "Parte da All.Q Agência". Copyright com ano dinâmico. Domínio kassiobraga.com.br.

---

## 5. Blog

Astro content collection `blog`. Schema mínimo:

```ts
// src/content/config.ts
import { defineCollection, z } from 'astro:content';
export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      titulo: z.string(),
      resumo: z.string(),
      data: z.date(),
      tag: z.string(),
      capa: z.string().optional(),
      rascunho: z.boolean().default(false),
    }),
  }),
};
```

Cadência real: um artigo por mês, com peso. Não gerar artigos falsos. Criar um único post de exemplo marcado claramente como modelo a substituir, mostrando a estrutura visual do artigo no estilo do site. Layout do artigo: cabeçalho com tag e data em mono, título Bricolage grande, corpo Albert Sans com bom respiro, moldura blueprint nas imagens.

Seis pautas sugeridas para o Kassio aprovar e escrever, listar no VALIDACAO.md como tarefa dele: um case destrinchado com números, uma opinião contrária ao senso comum do mercado, um bastidor de automação real montada, os três restantes a definir com ele.

---

## 6. Assets e fotos

Fotos reais vêm do site atual em `kassiobraga.com.br/imagens/`. Baixar, otimizar para web (webp, tamanho adequado) e colocar em `public/img/`. Inventário a montar e confirmar:
- `palco.jpg`, hero e palestras.
- `kassio_perfil.jpg` ou equivalente, retrato.
- Fotos de eventos e mentorias para a seção Palestras.
- Foto adicional disponível em `hub.allquadrado.com/img/kassio.webp`.
Se alguma foto não existir ou estiver em baixa qualidade, marcar no VALIDACAO.md, não usar banco de imagem genérico.

Logo da All.Q para o footer: usar a versão azul oficial. Se não houver acesso ao asset, marcar para o Kassio fornecer.

---

## 7. Validação de dados e textos

Regra de ouro do modo autônomo: não inventar dado, número, data, case ou credencial. O que não estiver neste brief, marcar.

Correções obrigatórias herdadas do site atual:
1. Remover qualquer referência ao Kommo. A parceria está encerrada.
2. Corrigir o bilíngue grudado. Esta versão é só português.
3. Trocar todos os CTAs de "aumentar vendas" pelos de network, palestra e parceria.

Credenciais a exibir: Google Partner, Meta Business Partner, Microsoft Advertising, E-goi Partner. Sem Kommo.

Gerar `VALIDACAO.md` ao final com, no mínimo:
- Períodos exatos das três fases da timeline.
- Datas de Sebrae DF, Brasília Innovation Week e Webinário E-goi.
- Liberação de logos, com CRP e UNIFAN destacados como bloqueados até aprovação.
- Handle do LinkedIn e e-mail a usar.
- URL do vídeo do YouTube.
- Inventário e qualidade das fotos.
- Texto final da seção Frente de IA.
- As seis pautas do blog.

---

## 8. Build e deploy

Build estático Astro, saída em `dist`. Deploy alvo Cloudflare Pages, comando `astro build`, output `dist`. 

Não fazer deploy em produção neste ciclo. Parar no protótipo rodando local em `npm run dev`. O deploy só acontece depois da validação com o Kassio.

---

## 9. Critérios de aceite

O protótipo está pronto quando:
- Todas as nove seções da home construídas e na ordem, mais blog índice e artigo.
- Conteúdo real, zero Lorem, zero placeholder esquecido, zero dado inventado.
- Responsivo, testado em mobile, com menu funcional.
- Régua anti template aplicada, score de humanização 85 ou mais. Checagem rápida: sem travessão, sem emoji como ícone, sem gradiente roxo, hero e seções fora do padrão genérico, paleta e fontes travadas, fotos sempre emolduradas, pixel art no módulo.
- `VALIDACAO.md` gerado com a lista da seção 7.
- Build passa sem erro.

---

## 10. Modo autônomo, o que decidir sozinho e o que sinalizar

Decidir sozinho, sem perguntar, porque o design system já cobre:
- Espaçamento, ritmo vertical, composição e variações de layout dentro da gramática neubrutalista.
- Onde colocar pixel art, cotas blueprint e molduras.
- Organização de arquivos e componentes Astro.
- Comportamento responsivo e breakpoints.
- Microcopy funcional de interface, dentro do tom direto da marca.

Parar e sinalizar no VALIDACAO.md, sem chutar:
- Qualquer dado real ausente deste brief, número, data, período, case.
- Conteúdo de CRP Tech, IDX, CRP Computadores, CRP Tecnologia e UNIFAN, bloqueado até aprovação do Kassio.
- Texto final da Frente de IA e as pautas do blog.
- Deploy em produção.

Fim do brief.
