document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.getElementById('copy-link');
  copyBtn.addEventListener('click', async () => {
    try {
      const url = location.href;
      await navigator.clipboard.writeText(url);
      copyBtn.textContent = 'Enlace copiado ✅';
      setTimeout(()=> copyBtn.textContent = 'Copiar enlace del perfil', 2000);
    } catch (e) {
      alert('No se pudo copiar automáticamente. Copia manualmente la URL del navegador.');
    }
  });
});
