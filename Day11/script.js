const wrapper = document.querySelector('.skull-wrapper');

if (location.protocol !== 'https:') {
  wrapper.innerHTML = '<p>In order to grant access to your microphone,' +
  '<br />you must load this page via HTTPS.' +
  '<br /><a href="https://codepen.io/dgca/pen/bwJaGV" target="blank">Click here.</a></p>';
} else {
  wrapper.classList.add('animate');
}

let mic;
const jaw = document.querySelector('.jaw');

function setup() {
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var vol = mic.getLevel();
  jaw.style.transform = `translateY(${vol * 40}%)`;
}