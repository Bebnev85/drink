export const initSlider = () => {
  let activeSlide = 0;
  const wrapper = document.querySelector('.hero');
  const slides = wrapper.getElementsByClassName('hero__item');
  const showSlide = (n) => {
    wrapper.classList.remove(`hero--${slides[activeSlide].getAttribute('data-bg')}`);
    const color = slides[n].getAttribute('data-bg');
    slides[activeSlide].classList.remove('slide--active');
    slides[n].classList.add('slide--active');
    wrapper.classList.add(`hero--${color}`);
  };

  const buttons = document.getElementsByClassName('hero__nav');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', ('click', (e) => {
      if (e.target.classList.contains('hero__nav--previos')) {
        if (activeSlide > 0) {
          showSlide(activeSlide - 1);
          activeSlide = activeSlide - 1;
          buttons[1].disabled = false;
        }
      } else if (e.target.classList.contains('hero__nav--next')) {
        if (activeSlide < slides.length - 1) {
          showSlide(activeSlide + 1);
          activeSlide = activeSlide + 1;
          buttons[0].disabled = false;
        }
      }
      e.target.disabled = activeSlide === 0 || activeSlide === slides.length - 1;
    }));
  }
};
