class Description {
    


    handlerClear() {
        ROOT_DESCRIPTION.innerHTML = '';
    }

    handlerOpenDescriptionPage(el, id) {

        descriptionPage.render(id);
    }

    render(id) {
        let htmlCatalog = '';
        let index = id;

        CATALOG.forEach(({ id, name, price, img, description, gender }) => {

            if (id == index) {
                htmlCatalog += `
                <span class="description-element__name">${name}</span>
                <img class="description-element__img" src="${img}" />
                <span class="description-element__price">
                    ⚡️ ${price.toLocaleString()} USD
                </span>
                <p class="description-element__text">${description}</p>
                <p class="description-element__gender">Стать: ${gender}</p>
                `;
            }
        });

        const html = `
            <div class="description-container">
                <div class="description__close" onclick="descriptionPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                </table>
            </div>
        `;

        ROOT_DESCRIPTION.innerHTML = html;
        
    }
};

const descriptionPage = new Description();
