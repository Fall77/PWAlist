//Preparar el ServiceWorker
self.addEventListener('install', e => {
    console.log('instalando.', e);
});
//Cambios en el ServiceWorker
self.addEventListener('activate', e => {
    console.log('activando.', e);
});
//Utilizar el ServiceWorker
self.addEventListener('fetch', e => {
    console.log('interceptando.', e);
});