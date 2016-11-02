import BugsplatSlider from './utils/BugsplatSlider';

var bugsplatSlider = null;
function instance() {
  if (bugsplatSlider === null) bugsplatSlider = new BugsplatSlider();
  return bugsplatSlider;
};

export {
  BugsplatSlider,
  instance,
};
