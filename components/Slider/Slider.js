

class Slider {

  render() {


      const html = `
      <div id="row">
			<img src="img/1.jpg" alt ="">
			<img src="img/2.jpg" alt ="">
			<img src="img/3.jpg" alt ="">
			<img src="img/4.jpg" alt ="">
			<img src="img/5.jpg" alt ="">
      <img src="img/6.jpg" alt ="">
      </div>

      `;
    autoSlider();
    var left = 0;
    var timer;

 
    function autoSlider () {
      timer = setTimeout(function () {
        var row = document.getElementById('row');
        left = left - 128;
        if (left < -512) {
          left = 0;
          clearTimeout(timer);
        }
        row.style.left = left + 'px';
        autoSlider ();
      }, 3000)
    }

      ROOT_SLIDER.innerHTML = html;
  }
};

const autoSlider = new Slider();