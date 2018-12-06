"use strict";
const animate = document.querySelectorAll('.animated');
const configAnimate = {
  root: null,
  rootMargin:"20px 0px -50px 0px",
  threshold: 0.5
}

let animateObserver = new IntersectionObserver(animateCallback, configAnimate);

animate.forEach(animation => {
  animateObserver.observe(animation);
})

function animateCallback(entries, observer) {
  for(const entry of entries){

    if (entry.intersectionRatio > 0){
      console.log(entry);
      entry.target.classList.add('action');
      entry.target.classList.remove('visible--offscreen');
    } else {
        entry.target.classList.remove('action');
        entry.target.classList.add('visible--offscreen');
      }

    }
  }


  ///////////////////////// GET IN TOUCH

const getinTouchbt = document.querySelector('.touch');

getinTouchbt.addEventListener('click', contactForm);
document.querySelector('.close').addEventListener('click', contactForm);
document.querySelector('.sendmessage').addEventListener('click', contactForm);
function contactForm() {
  console.log('contact!');
  document.querySelector('#map').classList.toggle('hidden');
  document.querySelector('.contact-info').classList.toggle('expanded');
  document.querySelector('.contact-form').classList.toggle('visible');


}
