class Order {

	
	render() {

        const html = `
        <form class="container">
        
        <div class="form-group">
          <label for="exampleInputName1">Прізвище та Ім'я</label>
          <input name="name" type="text" class="form-control" id="exampleInputName1"  placeholder="Грибинюк Олександр" >
        </div>

        <div class="form-group">
          <label for="exampleInputAddress">Адреса</label>
          <input  name="address" type="text" class="form-control" id="exampleinputAddress1"  placeholder="Київ">
        </div>

        <div class="form-group">
          <label for="phone">Номер телефону</label>
          <input  name="phone" type="tel" class="form-control" id="phone"  placeholder="0679999333">
         </div>

        <div class="form-group">
          <label for="email">Пошта</label>
          <input  name="email" type="email" class="form-control" id="email" placeholder="example@gmail.com">
         </div>

         <label for="addinfo">Додаткова інформація</label>
        <input  name="addinfo" type="text" id="addinfo"  placeholder="Введіть додаткові побажання">

        <button type="submit" value="push" id="send-form" class="btn-primary">Підтвердити</button>
      </form>
        `;

        ROOT_ORDER.innerHTML = html;
    }
	
}

    


const orderPage = new Order();
