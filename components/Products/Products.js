class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавити в корзину';
        this.labelRemove = 'Видалити з корзини';
    }
    handlerSetLocatStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerText = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
        }

        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img, gender }) => {
            let activeClass = '';
            let activeText = '';
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            if(true) {
                htmlCatalog += `
                    <li class="products-element">
                        <span class="products-element__name">${name}</span>
                        <img class="products-element__img" src="${img}" />
                        <span class="products-element__price">
                            ⚡️ ${price.toLocaleString()} USD
                        </span>
                        <button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
                            ${activeText}
                        </button>
                        <button class="description-element__btn" onclick="descriptionPage.handlerOpenDescriptionPage(this, '${id}')"> Опис </button>
                    </li>
                `
                };            
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;

        document.querySelectorAll('.check').forEach((element) => {
            element.onclick = orderFunction;
        })

        
        function orderFunction() {
            let all = document.querySelector('.check[value="all"]');
            let m = document.querySelector('.check[value="m"]');
            let f = document.querySelector('.check[value="f"]');
            let htmlCatalog = '';
            const productsStore = localStorageUtil.getProducts();
            if (m.checked && !f.checked) {
                htmlCatalog = '';
            CATALOG.forEach(({ id, name, price, img, gender }) => {
                let activeClass = '';
                let activeText = '';
                if (productsStore.indexOf(id) === -1) {
                    activeText = this.labelAdd;
                } else {
                    activeClass = ' ' + this.classNameActive;
                    activeText = this.labelRemove;
                }
            
                if(gender === 'm') {
                    htmlCatalog += `
                    <li class="products-element">
                        <span class="products-element__name">${name}</span>
                        <img class="products-element__img" src="${img}" />
                        <span class="products-element__price">
                            ⚡️ ${price.toLocaleString()} USD
                        </span>
                        <button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
                            Додати/Видалити
                        </button>
                        <button class="description-element__btn" onclick="descriptionPage.handlerOpenDescriptionPage(this, '${id}')"> Опис </button>
                    </li>
                ` 
    
            } 
        }) 
    }
    else if (f.checked && !m.checked) {
        htmlCatalog = '';
        CATALOG.forEach(({ id, name, price, img, gender }) => {
            let activeClass = '';
            let activeText = '';
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            if(gender === 'f') {
                htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price">
                        ⚡️ ${price.toLocaleString()} USD
                    </span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
                        Додати/Видалити
                    </button>
                    <button class="description-element__btn" onclick="descriptionPage.handlerOpenDescriptionPage(this, '${id}')"> Опис </button>
                </li>
            ` 

        } 
    }) 
}   else {
    htmlCatalog = '';
    CATALOG.forEach(({ id, name, price, img, gender }) => {
        let activeClass = '';
        let activeText = '';
        if (productsStore.indexOf(id) === -1) {
            activeText = this.labelAdd;
        } else {
            activeClass = ' ' + this.classNameActive;
            activeText = this.labelRemove;
        }

        
            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}" />
                <span class="products-element__price">
                    ⚡️ ${price.toLocaleString()} USD
                </span>
                <button class="products-element__btn${activeClass}" onclick="productsPage.handlerSetLocatStorage(this, '${id}');">
                    Додати/Видалити
                </button>
                <button class="description-element__btn" onclick="descriptionPage.handlerOpenDescriptionPage(this, '${id}')"> Опис </button>
            </li>
        ` 
        
    })
}

        const html = `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
        `;
         ROOT_PRODUCTS.innerHTML = html;
         
        }

    }
};

const productsPage = new Products();
