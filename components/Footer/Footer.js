class Footer {

    render() {
        const html = `
        <div class="footer">
          <div class="footer__row">
            <div class="footer__text">📞: +390560230120 ,
            Stay Home 🏠
            </div>
          </div>
         </div>
        `;

        ROOT_FOOTER.innerHTML = html;
    }
};

const footerDown = new Footer();
