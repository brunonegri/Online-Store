export async function getCategories() {
  // Implemente aqui]
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const promise = await fetch(url);
  const data = await promise.json();
  console.log(data);
  return data;
}

console.log(getCategories());

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const queryUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const categoryUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const categoryAndQueryUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  if (categoryId === '' && query !== '') {
    const promise = await fetch(queryUrl);
    const data = await promise.json();
    console.log(data);
    return data;
  }
  if (categoryId !== '' && query === '') {
    const promise = await fetch(categoryUrl);
    const data = await promise.json();
    console.log(data);
    return data;
  }
  if (categoryId !== '' && query !== '') {
    const promise = await fetch(categoryAndQueryUrl);
    const data = await promise.json();
    console.log(data);
    return data;
  }
}
