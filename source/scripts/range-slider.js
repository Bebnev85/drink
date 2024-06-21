const rules = [
  '.noUi-connect {background-color: #9070ec;}',
  '.noUi-handle {max-width: 100%;box-shadow: none;border-radius: 50%;box-sizing: border-box;border: 2px solid #9070ec;background-color: #ffffff;}',
  '.noUi-handle::after  {display: none;}',
  '.noUi-handle::before {display: none;}',
  '.noUi-horizontal .noUi-handle {width: 24px;height: 24px;right: -12px;top: -10px;}',
  '.noUi-horizontal .noUi-handle-upper {right: 0;}',
  '.noUi-horizontal .noUi-handle-lower {right: -24px;}'
];

const style = document.styleSheets[0];

export const initRangeSlider = () => {
  const rangeSlider = document.querySelector('#range-slider');

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  const min = 0;
  const max = 970;
  const range = [min, max];

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [
        Math.round(+input0.value) || min,
        Math.round(+input1.value) || max
      ],
      connect: [false, true, false],
      step: 1,
      range: {
        'min': [min],
        'max': [max]
      }
    });

    const setRangeSlider = (i, value) => {
      const values = [null, null];
      values[i] = value;

      rangeSlider.noUiSlider.set(values);
    };

    rangeSlider.noUiSlider.on('update', (values, handle) => {
      const newValue = Math.round(values[handle]);
      inputs[handle].value = newValue;
      if (newValue === range[handle]) {
        inputs[handle].value = null;
      }
    });

    inputs.forEach((el, index) => {
      el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
      });
    });

    rules.forEach((i) => {
      style.insertRule(i, style.cssRules.length);
    });
  }
};
