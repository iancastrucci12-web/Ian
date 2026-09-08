// Service worker mínimo: solo existe para que el navegador considere
// la app "instalable". No cachea nada — todos los datos siempre
// se piden en vivo a Supabase, así que no hay riesgo de mostrar
// información vieja.
self.addEventListener("install", function(event){
  self.skipWaiting();
});
self.addEventListener("activate", function(event){
  self.clients.claim();
});
self.addEventListener("fetch", function(event){
  event.respondWith(fetch(event.request));
});
