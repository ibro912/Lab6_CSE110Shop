// Script.js

window.addEventListener('DOMContentLoaded', () => {
	//fetch request
    fetching();
	
});

async function fetching()
{
    let response = await fetch('https://fakestoreapi.com/products');

	var products = await response.json();
  	if(!window.localStorage.getItem('prods'))
  	{
		window.localStorage.setItem('prods', JSON.stringify(products));
	}
    else
    {
        products = JSON.parse(window.localStorage.getItem('prods'));
    }


    products.forEach(function(item)
    {
    let product = new ProductItem(item);
    document.getElementById('product-list').appendChild(product);
    });
}


