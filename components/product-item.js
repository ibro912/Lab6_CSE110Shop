// product-item.js

class ProductItem extends HTMLElement {
	constructor(item)
	{
		super();

		let shadow = this.attachShadow({mode: 'open'});

		const product = document.createElement('li');
		product.setAttribute('class', 'product');

		const image = document.createElement('img');
		image.setAttribute('width', 200);
		image.setAttribute('max-height', 300);
		image.src = item['image'];
		image.alt = item['title'];
		
		product.appendChild(image);

		const title = document.createElement('p');
		title.setAttribute('class', 'title');
		title.textContent = item['title'];

		product.appendChild(title);

		const price = document.createElement('p');
		price.setAttribute('class', 'price');
		price.textContent = item['price'];

		product.appendChild(price);

		const button = ducoment.createElement('button');


		const linkElem = document.createElement('link');
		linkElem.setAttribute('rel', 'stylesheet');
		linkElem.setAttribute('href', 'styles/styles.css');

		shadow.appendChild(product);
		shadow.appendChild(linkElem);
	}
}

customElements.define('product-item', ProductItem);