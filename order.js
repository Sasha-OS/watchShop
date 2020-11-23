function validateEmail (email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}




function render() {
	let html = '';
	let htmlC = '';
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
			let data = '';
			const requestUrl = 'https://jsonplaceholder.typicode.com/users';
			function sendRequest(method, url, body = null) {
				return new Promise((resolve, reject) => {
					
				const xhr = new XMLHttpRequest()
			
				xhr.open(method, url)
			
				xhr.responseType = 'json'
				xhr.setRequestHeader('Content-type', 'application/json')
			
				xhr.onload = () => {
					if (xhr.status >=400) {
						reject(xhr.response)
					} else {
						resolve(xhr.response)
					}
				}
			
				xhr.onerror = () => {
					reject(xhr.response)
				}
			
				xhr.send(JSON.stringify(body))
					}) 	
				
				
				}
			
				const productsStore = localStorageUtil.getProducts();
				let values = new Array();
				let personalId = Date.now();
				let sumCatalog = 0;
				CATALOG.forEach(({ id, name, price }) => {
					if (productsStore.indexOf(id) !== -1) {
						 values += JSON.stringify({name, price})
						 sumCatalog+=price;
						 htmlC += `
							<div class="order-container">
								<span class="products-element__name">${name}</span>
								<span class="products-element__price">
								⚡️ ${price.toLocaleString()} USD
								</span>
           	 				</div>	
							`
					}
					html = `<div class="container">
					<div id="thanks">Дякуємо, ${document.getElementById('exampleInputName1').value}, замовлення успішно сформоване та успішно прямує в ${document.getElementById('exampleinputAddress1').value}</div>
					${htmlC}
					Сума замовлення: ${sumCatalog} USD
					</div>
					`
					return values
				});
				if (sumCatalog == 0) {
					console.log('Корзина пуста')
					document.getElementById('send-form').disabled = 'true';
					document.getElementById('send-form').style.background = 'red';
					document.getElementById('send-form').innerText= 'Корзина пуста';
					return
				}
			
				const body = {
					name: document.getElementById('exampleInputName1').value,
					address: document.getElementById('exampleinputAddress1').value,
					phone: document.getElementById('phone').value,
					email: document.getElementById('email').value,
					additional: document.getElementById('addinfo').value,
					date: new Date(),
					sum: sumCatalog,
					values: values
				}
				document.getElementById('send-form').disabled = 'true';
				document.getElementById('send-form').style.background = 'green';
				localStorage.clear();
			
				sendRequest('POST', requestUrl, body )
				.then( data => console.log(data))
				.catch( err => console.log(err))

				ROOT_ORDERINFO.innerHTML = html;
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
