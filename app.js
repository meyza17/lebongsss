if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then((registration) => {
        console.log('Service Worker berhasil didaftarkan:', registration);
      })
      .catch((error) => {
        console.log('Pendaftaran Service Worker gagal:', error);
      });
  }
  