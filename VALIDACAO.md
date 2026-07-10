# VALIDAÇÃO, kassiobraga.com.br

Lista de tudo que precisa da confirmação do Kassio antes do deploy. O protótipo está
rodando local (`npm run dev`), build estático passa sem erro. **Nada de novo foi inventado**:
o que não estava no brief ou no site atual virou placeholder honesto e está listado abaixo.

Legenda de status: ⛔ bloqueado, ⚠️ a confirmar, ✅ usado (confirmar se procede), ✔️ resolvido na rodada 2, ✳️ aplicado nas rodadas 3, 4 e 5.

---

## Rodada 5, fechamento e deploy de teste (resumo)

Rodada de fechamento. Dois ajustes rápidos e o deploy de teste (só `.pages.dev`, sem custom
domain, sem tocar no DNS de kassiobraga.com.br, que segue no ar).

- ✳️ **Palestras com seis itens**: incluídas **Campus Party Brasília (2017)** e **Capital
  Empreendedora (2018)**, antes reservas, no mesmo padrão blueprint (moldura, legenda mono,
  ano). Seção reordenada por ano, do mais recente ao mais antigo. Papel sóbrio, sem descrição
  inventada. Arquivo: `src/components/Palestras.astro`. Detalhe na seção 2.
- ✳️ **Datas confirmadas pelo Kassio** (marcador "a confirmar" removido): Campus Party GO
  2022, Sebrae DF 2021, Brasília Innovation Week 2021, Webinário E-goi 2022, Campus Party BSB
  2017 e Capital Empreendedora 2018.
- ✳️ **Vídeo do YouTube** `cH0N-6W1u6A` confirmado.
- ✳️ **Ano AllQuadrado → All.Q** encerrado: mantém "pouco depois", sem cravar.
- ⛔ **CRP, IDX e UNIFAN** seguem bloqueados, sem alteração.

---

## Rodada 4, ajuste final (resumo)

Ajuste de desambiguação antes do deploy. Sem publicar ainda.

- ✳️ **Cases, duas Floras desambiguadas**: confirmado pelo Kassio que são marcas distintas
  e ambas corretas. A logo da grade é a **Flora cliente local** (rótulo/`alt` ajustado para
  "Flora, cliente local"); o **Grupo Flora (grupo JBS)** segue **só por nome** no bloco de
  relação longa, agora com nota explícita de que é marca distinta da Flora da grade. Nenhuma
  logo da JBS foi criada. Arquivo: `src/components/Cases.astro`. Detalhe na seção 3.

---

## Rodada 3, decisões aplicadas (resumo)

Mudanças desta rodada, todas dentro do design system e do conteúdo já aprovados:

- ✳️ **Timeline reescrita por completo** com a cronologia real e definitiva, agora em
  **quatro fases** (era três). A fundação da All.Q foi corrigida para **janeiro de 2017**
  (não 2016). **2016 passou a ser a virada profissional em Goiânia**, não o ano da agência.
  Removidas a antiga "transição tech com Softplan" e a fase genérica da PSA. Detalhe na
  seção 1. Arquivo: `src/components/Timeline.astro`.
- ✳️ **Cases, reforço de relação longa**: nova linha "Relações que duram" abaixo da grade
  e do texto dos 500, com PSA Sistemas e Lumi Software desde o início, Canal Técnico desde
  2017, Tubos ABC desde 2018, e atuação com o **Grupo Flora (grupo JBS)** como prova de
  porte. **Canal Técnico e Grupo Flora entram só por nome** (não estão na grade e não há
  logo liberado, então nenhuma logo foi inventada). Detalhe na seção 3.
- ✳️ **Instagram adicionado em Conteúdo**, ao lado do vídeo do YouTube (dois lado a lado),
  com ícone Lucide `instagram`, sem emoji. Card linka para `instagram.com/allq.agencia/`.
  O vídeo do YouTube foi mantido. Detalhe na seção 5.
- ⛔ **CRP, IDX e UNIFAN** seguem bloqueados (mantido).

---

## Rodada 2, decisões aplicadas (resolvidas)

Estes itens foram decididos pelo Kassio e já estão no protótipo:

- ✔️ **Foto da fase 01 (construção civil)**: não existe foto. O slot virou um **grafismo
  blueprint** (planta técnica estilizada com cotas e motivo pixel azul), na mesma moldura
  grossa e com legenda mono. Componente `src/components/pixel/PlantaBlueprint.astro`.
- ✔️ **Ano de fundação padronizado** em todo o site (revisado na rodada 3): a fundação da
  agência é **janeiro de 2017**, como **AllQuadrado Marketing**, simplificada pouco depois
  para **All.Q Agência**. **2016 é a virada profissional em Goiânia**, não o ano da agência.
  Ver fase 04 da timeline na seção 1.
- ✔️ **E-mail definido**: `kassio@allq.com.br`, aplicado na seção Contato, no footer e nos
  dados estruturados (JSON-LD Person). Placeholder removido.
- ✔️ **Grade de logos final** (8): Tubos ABC, PSA Sistemas, Imperador, Lumi Software,
  FastEscova, Flora, Hospital de Olhos, Vanguarda. **Medial e Ganho removidos**. Lumi
  baixada do site oficial e usada em tamanho reduzido (logo pequena, sem ampliar).
- ✔️ **Texto abaixo da grade de logos** adicionado, com destaque: "Mais de 500 empresas
  atendidas ao longo de mais de uma década. A régua é sempre a mesma, menos vaidade e mais
  resultado."
- ✔️ **Frente de IA, texto final aprovado** aplicado, com o fecho "Menos trabalho
  repetitivo, mais operação que escala." CTA "Falar sobre automação".
- ✔️ **Blog, 6 posts criados como rascunho** (`rascunho: true`), só título e estrutura, sem
  corpo inventado. Não aparecem no site nem no build até serem escritos e publicados.
- ⛔ **CRP, IDX e UNIFAN** seguem bloqueados, não entram (mantido).

---

## 1. Timeline da história, quatro fases (seção História)

✳️ **Rodada 3: timeline reescrita por completo** com a cronologia real e definitiva enviada
pelo Kassio. A linha do tempo agora tem **quatro fases**. Origem usada no texto da fase 01:
nascido em Brasília em 1989, morou lá até 2015.

| Fase | Título | Período exibido | Foto | Conteúdo |
|------|--------|-----------------|------|----------|
| 01 | A base | 2007 a 2016 | grafismo blueprint | Brasília: auditor fiscal temporário (grupo Ambev), frentista (posto Petrobras); construção civil na **Constrói Construções e Incorporações** (2008 a 2015); Cartório de Registro Civil em Catalão (2015 a 2016). Escola de método, prazo e chão de obra. |
| 02 | A virada | 2016 · Goiânia | grafismo blueprint | Mudança para Goiânia. De manhã com **Celso Moraes** (perito do Fórum de Goiânia, obras de loteamento da J. Virgílio): vistoria, perícia, medição, planta. À tarde, **PSA Sistemas**: novo site, identidade visual, primeiro inbound. Design começou a virar marketing. |
| 03 | O primeiro cliente | 2016 a 2017 | grafismo blueprint | Captação própria. Primeiro cliente **Rodrigo Vidal, Lumi Software** (primeiro site vendido, primeira logo comercial). Por indicação, **Asteps** (startups de Brasília): identidade, sites, início de SEO, depois RD Station. Marketing começou a virar estratégia. |
| 04 | A All.Q | janeiro de 2017 a hoje | `perfil.webp` | Fundação em **janeiro de 2017** como **AllQuadrado Marketing**, simplificada pouco depois para **All.Q Agência**. Hoje, B2B de construção, indústria e tecnologia. As três camadas, marketing, design e automação, são a soma da trajetória. |

- ✳️ **Correções aplicadas**: removidas a "transição tech com Softplan" e a fase genérica
  da PSA; corrigida a fundação para janeiro de 2017 (antes constava 2016).
- ✳️ **Encerrado (rodada 5)**: o **ano exato** da simplificação de AllQuadrado Marketing
  para All.Q Agência fica como está. O texto mantém "pouco depois", sem cravar ano, por
  decisão do Kassio.
- **Fotos das fases**: usadas fotos reais onde fazia sentido. Só a fase 04 tem foto real
  (`perfil.webp`, retrato). Fases 01, 02 e 03 usam o **grafismo blueprint**
  (`PlantaBlueprint`), no mesmo padrão da construção. Nenhum banco de imagem.
- Grafia confirmada nesta rodada: **Constrói** (com acento) Construções e Incorporações.

## 2. Datas de palestras e mentorias (seção Palestras)

✳️ **Rodada 5: todas as datas confirmadas pelo Kassio.** A seção agora tem **seis itens**,
ordenados por ano (do mais recente ao mais antigo). As duas reservas (Campus Party BSB 2017
e Capital Empreendedora 2018) entraram na grade, no mesmo padrão blueprint das demais.

| Item | Data exibida | Status |
|------|--------------|--------|
| Campus Party Goiás (palco principal) | 2022 | ✳️ confirmado |
| Webinário E-goi | 2022 | ✳️ confirmado |
| Brasília Innovation Week, programa BIOTIC (mentor) | 2021 | ✳️ confirmado |
| Mentoria Sebrae DF | 2021 | ✳️ confirmado |
| Capital Empreendedora | 2018 | ✳️ confirmado (incluído na rodada 5) |
| Campus Party Brasília | 2017 | ✳️ confirmado (incluído na rodada 5) |

- ✳️ **Resolvido (rodada 5)**: os dois itens que antes eram reserva (**Campus Party BSB
  2017** e **Capital Empreendedora 2018**) foram incluídos na seção Palestras, com as fotos
  já otimizadas (`campus-party-bsb.webp`, `capital-empreendedora.webp`), papel sóbrio
  ("Palestrante") e ano. Nenhuma descrição inventada.
- ⚠️ **Local de Capital Empreendedora**: exibido como "Brasília · DF" por coerência (evento
  do mesmo período em BSB). Se o local correto for outro, avisar para ajustar.

## 3. Liberação de logos (seção Cases)

### ⛔ Bloqueados (não publicados, nem por nome, conforme regra do brief)
Estas marcas **não aparecem** no site, em nenhuma forma, até aprovação explícita:
- **CRP Tech** (e CRP Computadores, CRP Tecnologia)
- **IDX Data Centers**
- **UNIFAN**

Os arquivos `logo idx.png`, `logo-crp-tecnologia.png` e `unifan.png` existem no site
atual, mas **não foram baixados nem usados**.

### ✔️ Grade final publicada (rodada 2, liberada pelo Kassio)
Oito logos, todos reais e otimizados em webp:
Tubos ABC, PSA Sistemas, Imperador, **Lumi Software** (baixada de lumisoftware.com.br e
usada em tamanho reduzido), FastEscova, Flora, Hospital de Olhos, Vanguarda.

### Fora da grade
- **Medial e Ganho**: removidos a pedido do Kassio (rodada 2).
- **Contel, Dolcci Empório, Escola Imaculada**: encontrados no site atual, **não** entraram
  na grade final. Avisar se quiser incluir algum depois.

### ✳️ Relação longa (rodada 3, linha de destaque abaixo da grade)
Nova linha "Relações que duram", abaixo da grade de logos e do texto dos 500:
PSA Sistemas e Lumi Software **desde o início**, Canal Técnico **desde 2017**, Tubos ABC
**desde 2018**, e atuação com o **Grupo Flora (grupo JBS)** como prova de porte.

- **Canal Técnico** e **Grupo Flora não estão na grade** e não há logo liberado/baixado,
  então entram **só por nome no texto**, sem logo inventada.
- ✳️ **Resolvido (rodada 4)**: confirmado pelo Kassio que são **marcas distintas e ambas
  corretas**. A logo "Flora" da grade (`logo-flora.webp`) é a **Flora cliente local**; o
  **Grupo Flora do texto é o do grupo JBS**. Desambiguação aplicada: a logo da grade ganhou
  rótulo/`alt` "Flora, cliente local", e o bloco de relação longa cita o Grupo Flora (JBS)
  só por nome, com nota explícita de que é marca distinta da Flora da grade. Nenhuma logo
  da JBS foi criada.

## 4. Contato

| Campo | Valor exibido | Status |
|-------|---------------|--------|
| LinkedIn | linkedin.com/in/kassiobraga | ✅ confirmado no site atual |
| WhatsApp | +55 62 98227-3885 | ✅ confirmado no site atual |
| E-mail | kassio@allq.com.br | ✔️ definido (rodada 2) |

- ✔️ **Resolvido (rodada 2)**: e-mail `kassio@allq.com.br` aplicado na seção Contato, no
  footer e no JSON-LD. Definido em `src/data/site.ts`.

## 5. Vídeo do YouTube e Instagram (seção Conteúdo)

- Embed usando o ID `cH0N-6W1u6A`. ✳️ **Confirmado pelo Kassio (rodada 5)** como o vídeo
  certo para destacar. Definido em `src/data/site.ts` (`youtubeId`).
- ✳️ **Instagram adicionado (rodada 3)**, ao lado do vídeo (dois lado a lado). Card com
  ícone Lucide `instagram` (sem emoji) que linka para
  **`https://www.instagram.com/allq.agencia/`**. Handle exibido: `@allq.agencia`. O vídeo do
  YouTube foi mantido. Dados em `src/data/site.ts` (`instagram`, `instagramHandle`).
  O card é um link externo (não um feed embutido), para não depender de script de terceiros.

## 6. Inventário e qualidade das fotos (`public/img/`)

Todas reais, do site atual ou do hub. Otimizadas para webp. Nenhum banco de imagem genérico.

| Arquivo | Uso | Origem | Observação |
|---------|-----|--------|------------|
| palco.webp | Hero, fig.01 | imagens/palco.jpg | ✅ boa |
| perfil.webp | Timeline **fase 04** (All.Q) | imagens/kassio_perfil.jpg | ✅ boa |
| campus-party-go.webp | Palestras | imagens/cpgo2022-palestra.jpg | ✅ boa (origem era 16 MB) |
| sebrae-df.webp | Palestras | imagens/sebrae-df.jpg | ✅ ok |
| innovation-week.webp | Palestras | imagens/innovation week.jpg | ✅ ok |
| webinario-egoi.webp | Palestras | imagens/webinario e-goi.jpg | ⚠️ verificar nitidez |
| capital-empreendedora.webp | Palestras (rodada 5) | imagens/capital empreendedora.jpg | ✳️ em uso na seção Palestras |
| campus-party-bsb.webp | Palestras (rodada 5) | imagens/cpbsb2017.jpg | ✳️ em uso na seção Palestras |
| egoi-partners.webp | (não usada ainda) | imagens/e-goi partners.jpg | reserva |
| logo-tubos-abc / psa-sistemas / imperador / fastescova / flora / hospital-olhos / vanguarda .webp | Cases (grade de 8) | imagens/clientes/ | ✅ |
| logo-lumi.webp | Cases | lumisoftware.com.br | ✅ pequena (150 px), usada reduzida |
| logo-allq.webp | Footer | allq.com.br | ✅ versão oficial do rodapé |

- ✳️ **Fases 01, 02 e 03 sem foto real**: usam o grafismo blueprint (`PlantaBlueprint`).
  Se surgir foto real de qualquer época (construção, perícia/Goiânia, Lumi/Asteps), dá para
  trocar o slot correspondente.
- O `kassio.webp` do hub (hub.allquadrado.com) foi baixado mas o `kassio_perfil.jpg` ficou
  melhor para retrato, então usei este. Disponível como alternativa se preferir.

## 7. Texto final da Frente de IA

- ✔️ **Resolvido (rodada 2)**: texto final aprovado aplicado, com o fecho "Menos trabalho
  repetitivo, mais operação que escala". CTA "Falar sobre automação".
  Arquivo: `src/components/FrenteIA.astro`.

## 8. Pautas do blog (escrever, tarefa do Kassio)

O blog tem o post **modelo** (`modelo-de-artigo.md`) mais os **6 posts criados como rascunho**
(`rascunho: true`), só com título e estrutura, sem corpo inventado. Eles **não aparecem** no
site nem no build até o Kassio escrever o conteúdo e tirar o `rascunho`. Arquivos em
`src/content/blog/`:

1. ✔️ Um case destrinchado: o que funcionou e o que não. `case-destrinchado-com-numero-real.md`
2. ✔️ Por que parei de vender pacote de posts. `parei-de-vender-pacote-de-posts.md`
3. ✔️ O sistema em n8n que substituiu três planilhas. `sistema-n8n-que-substituiu-tres-planilhas.md`
4. ✔️ Marketing, design e automação não são três áreas, são uma só. `marketing-design-automacao-uma-coisa-so.md`
5. ✔️ O que dez anos atendendo construção e indústria me ensinaram sobre B2B. `dez-anos-de-construcao-e-industria-sobre-b2b.md`
6. ✔️ Por que todo dono de agência deveria saber montar um sistema. `dono-de-agencia-deveria-saber-montar-sistema.md`

Tarefa do Kassio: escrever o corpo de cada um (um por mês), com número e case reais.

---

## Correções do site atual já aplicadas

- ✅ **Kommo removido**: nenhuma referência a Kommo no site novo (o site atual já usava
  E-goi, não havia menção a Kommo a remover, mas confirmado que não foi adicionado).
- ✅ **Bilíngue grudado corrigido**: site 100% em português, sem o "História Story" colado.
- ✅ **CTAs de venda trocados**: nada de "aumentar vendas" ou "solicitar orçamento". Os CTAs
  são "Convidar para palestra", "Propor parceria", "Falar sobre automação". WhatsApp é
  secundário, sem cara de venda. LinkedIn em destaque.
- ✅ **Credenciais**: Google Partner, Meta Business Partner, Microsoft Advertising,
  E-goi Partner. Sem Kommo.

## Checagem anti template (seção 9), autoavaliação

Revalidada na rodada 3 após as mudanças (timeline, Cases, Instagram).

| Critério | Resultado |
|----------|-----------|
| Sem travessão em texto visível | ✅ (grep `[—–]` em `src/` = zero ocorrências, rodada 3) |
| Sem emoji como ícone | ✅ (ícones Lucide em SVG, inclui novo `instagram`) |
| Sem gradiente roxo / azul genérico | ✅ (só grid blueprint) |
| Hero e seções fora do padrão genérico | ✅ (neubrutalismo blueprint) |
| Paleta e fontes travadas | ✅ (tokens do brief, intactos) |
| Fotos sempre emolduradas | ✅ (moldura navy + sombra dura) |
| Nenhum dado, data ou logo inventado | ✅ (Canal Técnico e Grupo Flora só por nome; fundação jan/2017) |
| Pixel art no módulo 16/14/2 | ✅ |
| Responsivo, menu mobile funcional | ✅ (vanilla, addEventListener; Conteúdo e Cases colapsam) |
| Build sem erro | ✅ (`astro build` 3 páginas, rodada 3) |

**Score de humanização estimado: ~90/100.** Todos os itens da régua atendidos.

## Próximo passo

✳️ **Rodada 5: deploy de teste publicado** no Cloudflare Pages (projeto `kassiobraga`),
**só na URL `.pages.dev`**. Sem custom domain, sem tocar no DNS de kassiobraga.com.br (que
segue no ar). URL de produção do teste: **https://kassiobraga.pages.dev**.

Depois da sua revisão no ambiente de teste, o passo final é o cutover de produção (apontar o
domínio), que **não** foi feito neste ciclo.
