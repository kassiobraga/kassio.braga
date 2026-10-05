// Um post entra no ar quando não é rascunho e a data dele já chegou.
// O site é reconstruído todo dia pelo workflow "Publicação diária do blog",
// então cada artigo aparece sozinho na data marcada.
export const publicado = (e: { data: { rascunho: boolean; data: Date } }) =>
  !e.data.rascunho && e.data.data.getTime() <= Date.now();
