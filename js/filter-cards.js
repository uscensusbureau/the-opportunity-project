var showcaseSearchForm = document.getElementById('showcase-search-form');
showcaseSearchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var input, filter, i, filteredProducts, productGrid;
  input = document.getElementById('searchField');
  filter = input.value.toLowerCase();
  products = document.getElementsByName('productCard');
  productGrid = document.getElementById('product-grid');
  filteredProducts = [];
  for (i = 0; i < products.length; i++) {
    productName = products[ i ].getElementsByTagName('h3')[ 0 ].innerText.toLowerCase();
    if (productName.includes(filter)) {
      filteredProducts.push((products[ i ]).outerHTML);
    }
  }
  newHtml = filteredProducts.join('');
  productGrid.innerHTML = newHtml;
  input.value = '';
}
);
