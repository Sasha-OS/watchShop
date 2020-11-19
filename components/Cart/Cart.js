class Cart {

	
	render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price, img }) => {
            if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
			<li class="products-element">
				<span class="products-element__name">${name}</span>
				<img class="products-element__img" src="${img}" />
				<span class="products-element__price">
					⚡️ ${price.toLocaleString()} USD
				</span>
				<button class="products-element__btn" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
								Видалити з корзини
                        </button>
			</li>
                `;
                sumCatalog += price;
            }
        });

        const html = `
			<ul class="products-container">

               
                    ${htmlCatalog}
					<div class="shopping-element__name">💥 Сума всіх товарів:</div>
                    <div class="shopping-element__price">${sumCatalog.toLocaleString()} USD</div>
                    <button class="description-element__btn" onclick='window.location.path="/watchShop/order"' > Перейти до формування замовлення </button>
                   
                    
               
           	 </ul>
        `;

        ROOT_CART.innerHTML = html;
    }
	
}

    


const cartPage = new Cart();
