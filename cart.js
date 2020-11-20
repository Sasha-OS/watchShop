function render() {
	navigationMenu.render();
	cartPage.render();
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
