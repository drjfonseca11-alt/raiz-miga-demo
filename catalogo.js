const filterButtons = document.querySelectorAll('.filter');
const products = [...document.querySelectorAll('.catalog-product')];
const searchInput = document.querySelector('#search');
const noResults = document.querySelector('#no-results');
let activeCategory = 'todos';

function updateCatalog() {
  const query = searchInput.value.trim().toLocaleLowerCase('es');
  let visible = 0;
  products.forEach((product) => {
    const matchesCategory = activeCategory === 'todos' || product.dataset.category === activeCategory;
    const matchesSearch = product.dataset.name.includes(query) || product.textContent.toLocaleLowerCase('es').includes(query);
    const show = matchesCategory && matchesSearch;
    product.hidden = !show;
    if (show) visible += 1;
  });
  noResults.hidden = visible !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.filter;
    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    updateCatalog();
  });
});

searchInput.addEventListener('input', updateCatalog);
