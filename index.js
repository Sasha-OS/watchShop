function render() {
	const productsStore = localStorageUtil.getProducts();
	headerPage.render(productsStore.length);
	productsPage.render();
	footerDown.render();	
	navigationMenu.render();
	autoSlider.render();
}

spinnerPage.render();

let CATALOG = [];

fetch('server/db.json')
    .then(res => res.json())
    .then(body => {
		CATALOG = body;
		
		setTimeout(() => {
			spinnerPage.handleClear();
			render();
		}, 1000);
    })
    .catch(() => {
        spinnerPage.handleClear();
    	errorPage.render();
    })

