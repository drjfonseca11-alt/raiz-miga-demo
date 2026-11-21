// Si una foto externa no está disponible, muestra una alternativa de panadería.
document.querySelectorAll('img').forEach((image) => {
  image.addEventListener('error', () => {
    if (image.dataset.fallbackTried) {
      const frame = image.parentElement;
      if (frame) {
        frame.dataset.imageLabel = image.alt || 'Raíz & Miga';
        frame.classList.add('image-unavailable');
      }
      image.remove();
      return;
    }
    image.dataset.fallbackTried = 'true';
    image.src = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85';
  });
});
