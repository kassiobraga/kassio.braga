// Redireciona www.kassiobraga.com.br para kassiobraga.com.br (301),
// mantendo caminho e query. Um único endereço canônico para o Google.
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.kassiobraga.com.br') {
    url.hostname = 'kassiobraga.com.br';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
