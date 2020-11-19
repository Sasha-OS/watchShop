class Menu {

    render() {
        const html = `
        <div class="dws-menu">
         <ul>
           <li route="/"><a href="index"><i"></i>Головна</a></li>
           <li route="/share"><a href="share"><i"></i>Акції</a></li>
           <li route="/cart"><a href="cart"><i"></i>Корзина</a></li>
           <li route="/order"><a href="order"><i "></i>Зробити замовлення</a></li>
         </ul> 
      </div>
        `;

        ROOT_MENU.innerHTML = html;
    }
};

const navigationMenu = new Menu();
