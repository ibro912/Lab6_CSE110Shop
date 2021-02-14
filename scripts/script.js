// Script.js

window.addEventListener('DOMContentLoaded', () => {
	//fetch request
    fetching();
	
});

async function fetching()
{
    let response = await fetch('https://fakestoreapi.com/products');

	let products = await response.json();
  	if(!localStorage.get(prods))
  	{
		window.localStorage.setItem(prods, products.stringify());
	}
    else
    {
        products = JSON.parse(window.localStorage.getItem('products'));
    }
}