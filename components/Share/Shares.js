class Share {
    
    render() {
        const html = `
        <div class="columns__column">
		<div class="columns__item item">
		  <div class="item__row">
			<div class="item_image">
			  <img src="img/1.jpg" alt="">
			</div>
			<div class="item__body">
			  <div class="item__title">Знижка на кожен 2-й годинник</div>
			  <div class="item__text">В червні стартувала акція на знижку 5% до чека на покупку від 2-х годинників
				  загальною сумою більше 40000.
				  Акція діє включно до 12.30.2020
			  </div>
			</div>
		  </div>
		</div>
		<div class="columns__item item">
			<div class="item__row">
			  <div class="item_image">
				<img src="img/2.jpg" alt="">
			  </div>
			  <div class="item__body">
				<div class="item__title">Розстрочка</div>
				<div class="item__text">Візьміть годинник у розстрочку під 0% на 12 місяців. Також ми пропонуємо послуги кредитування під 6% річних. Умови дійсні до 12.30.2020
				</div>
			  </div>
			</div>
		  </div>
		  <div class="columns__item item">
			<div class="item__row">
			  <div class="item_image">
				<img src="img/3.jpg" alt="">
			  </div>
			  <div class="item__body">
				<div class="item__title">Вигідний обмін</div>
				<div class="item__text">Обміняйте свою здорову нирку на наш годинник та отримайте 5000 USD в подарунок
				</div>
			  </div>
			</div>
		  </div>
	  </div>
        `;

        ROOT_SHARE.innerHTML = html;

       
    }
};

const sharePage = new Share();
