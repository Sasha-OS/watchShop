function render() {
	footerDown.render();	
	navigationMenu.render();
	sharePage.render();

}

spinnerPage.render();

let CATALOG = [];

fetch('server/catalog.json')
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
