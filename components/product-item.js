// product-item.js

class ProductItem extends HTMLElement {
	constructor()
	{
		super();

		let shadow = this.attachShadow({mode: 'open'});

		const product = document.createElement('li');
		product.setAttribute('class', 'product');

		const image = document.createElement('img');
		
		product.appendChild(image);

		const title = document.createElement('p');
		title.setAttribute('class', 'title');

		product.appendChild(title);

		const price = document.createElement('p');
		price.setAttribute('class', 'price');

		product.appendChild(price);

		const linkElem = document.createElement('link');
		linkElem.setAttribute('rel', 'stylesheet');
		linkElem.setAttribute('href', 'styles/styles.css');

		shadow.appendChild(product);
		shadow.appendChild(linkElem);
	}
}

customElements.define('product-item', ProductItem);