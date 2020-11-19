class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                🛒 ${count}
                </div>
            </div>
        <div class="check-box">
            <div class="check-item">
            <input type="checkbox" class="check" value="all" id="all" name="all" checked>
            <label for="all">Всі</label>
            </div>
            <div class="check-item">
                <input type="checkbox" class="check" value="m" id="m" name="m">
                <label for="m">Чоловічі</label>
            </div>
            <div class="check-item">
            <input type="checkbox" class="check" value="f" id="f" name="f">
            <label for="f">Жіночі</label>
            </div>
        </div>
        `;

        ROOT_HEADER.innerHTML = html;

        
        
    }
};

const headerPage = new Header();
