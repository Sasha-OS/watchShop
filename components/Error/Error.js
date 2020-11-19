class Error {
    render() {
        const html = `
        	<div class="error-container">
                <div class="error-message">
                    <h3>Шось пішло не так</h3>
                    <p>Походу не та ссилка або знов забув запустити сервер</p>
                </div>
        	</div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();
