"use strict";

var animate = document.querySelectorAll('.animated');
var configAnimate = {
  root: null,
  rootMargin: "20px 0px -50px 0px",
  threshold: 0.5
};

var animateObserver = new IntersectionObserver(animateCallback, configAnimate);

animate.forEach(function (animation) {
  animateObserver.observe(animation);
});

function animateCallback(entries, observer) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;


      if (entry.intersectionRatio > 0) {
        console.log(entry);
        entry.target.classList.add('action');
        entry.target.classList.remove('visible--offscreen');
      } else {
        entry.target.classList.remove('action');
        entry.target.classList.add('visible--offscreen');
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

///////////////////////// GET IN TOUCH

var getinTouchbt = document.querySelector('.touch');

getinTouchbt.addEventListener('click', contactForm);
document.querySelector('.close').addEventListener('click', contactForm);
document.querySelector('.sendmessage').addEventListener('click', contactForm);
function contactForm() {
  console.log('contact!');
  document.querySelector('#map').classList.toggle('hidden');
  document.querySelector('.contact-info').classList.toggle('expanded');
  document.querySelector('.contact-form').classList.toggle('visible');
}
//# sourceMappingURL=script.js.map