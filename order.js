function validateEmail (email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}




function render() {
	navigationMenu.render();
	orderPage.render();
	let form = document.querySelector('form');
	let sendForm = document.querySelector('#send-form');
	sendForm.onclick = function(event) {

		event.preventDefault();
		console.log('Початок валідації');
		if (!validateEmail(document.getElementById('email').value)) {
			document.getElementById('email').value += "😡";
			document.getElementById('email').style.color = "red";
		} else if ((document.getElementById('phone').value.length != 10)){
			document.getElementById('phone').value += "😡";
			document.getElementById('phone').style.color = "red";
		}  
		else 
		{	
			document.getElementById('email').style.color = "black";
			document.getElementById('phone').style.color = "black";
			console.log("Кінець валідації")
			console.log(serialize(form));
		}
 
		
	}
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
