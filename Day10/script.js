var flameTl = new TimelineMax({ onComplete: function() { this.restart(); } });
var sparkTl = new TimelineMax({ onComplete: function() { this.restart(); } });
var headTl = new TimelineMax({ onComplete: function() { this.restart(); } });
var machineTl = new TimelineMax({ onComplete: function() {
  headTl.play();
  endCardTl.play();
} });
var endCardTl = new TimelineMax();

headTl.pause();
endCardTl.pause();

flameTl
  .to('#flame', 0.25, { scaleY: '1.15', transformOrigin: 'center bottom' })
  .to('#flame', 0.25, { scaleY: '0.85' });

sparkTl
  .to('#spark', 0.1, { opacity: '1' })
  .to('#spark', 0.1, { opacity: '0' });

headTl
  .to('#head', 0.1, { y: '5' })
  .to('#head', 0.25, { y: '0' });


machineTl
  .to('#rope-01-a', 0, { scaleX: '1' }, '2')
  .to('#rope-01-a', 0.1, { scaleX: '0' })
  .to('#rope-01-b', 0.25, { scaleX: '0', transformOrigin: 'right center' }, '2')
  .to('#rope-01-c', 0, { scaleY: '0.25' }, '0')
  .to('#rope-01-c', 0.25, { scaleY: '1' }, '2')
  .to('#knife', 0, { y: '-100%' }, '0')
  .to('#knife', 0.25, { y: '0%' }, '2')
  .to('#balloon', 0.1, { opacity: '0' }, '2.25')
  .to('#pop', 0.25, { scale: '1.5', opacity: '0', transformOrigin: 'center' })
  .to('#rope-02-a', 0.1, { scaleY: '0', transformOrigin: 'center bottom' }, '-=0.25')
  .to('#rope-02-c', 0, { scaleY: '0.95', transformOrigin: 'center bottom' }, '0')
  .to('#rope-02-c', 0.5, { scaleY: '1', transformOrigin: 'center bottom' }, '-=0.25')
  .to('#teeter-totter', 0, { rotation: '-24', transformOrigin: 'center' }, '0')
  .to('#teeter-totter', 0.5, { rotation: '0', }, '-=0.5')
  .to('#base-ball', 0.5, { y: '12', transformOrigin: 'center' }, '-=0.5')
  .to('#base-ball', 1, { x: '28', y: '24', rotation: '55' })
  .to('#base-ball', 0.25, { x: '32', y: '58', rotation: '95', ease: 'linear' })
  .to('#base-ball', 1.5, { x: '126', y: '92', rotation: '255', ease: 'Power1.easeOut' }, '+=0.05')
  .to('#base-ball', 0.25, { x: '142', y: '146', rotation: '350', ease: Power0.easeNone })
  .to('#base-ball', 1.5, { x: '65', y: '174', rotation: '95', ease: 'Power1.easeOut' }, '+=0.05')
  .to('#base-ball', 0.25, { x: '45', y: '220', rotation: '0', ease: Power0.easeNone })
  .to('#base-ball', 1.5, { x: '130', y: '250', rotation: '140', ease: 'Power1.easeOut' }, '+=0.05')
  .to('#base-ball', 0.25, { x: '150', y: '285', rotation: '190', ease: Power0.easeNone })
  .to('#lever', 0.5, { rotation: '180', transformOrigin: 'center 96%', ease: Power2.easeIn })
  .to('#spark', 0.2, { x: '-31', ease: Power0.easeNone })
  .to('#spark', 0.5, { y: '-100', ease: Power0.easeNone })
  .to('#spark', 0.6, { x: '-161', y: '-100', ease: Power0.easeNone })
  .to('#spark', 0.2, { x: '-161', y: '-120', ease: Power0.easeNone })
  .to('#spark', 0.5, { x: '-71', y: '-120', ease: Power0.easeNone })
  .to('#spark', 0.2, { x: '-71', y: '-140', ease: Power0.easeNone })
  .to('#spark', 0.5, { x: '-161', y: '-140', ease: Power0.easeNone })
  .to('#spark', 0.5, { x: '-161', y: '-225', ease: Power0.easeNone })
  .to('#spark', 0.3, { x: '-126', y: '-225', ease: Power0.easeNone })
  .to('#spark', 0.5, { x: '-126', y: '-315', ease: Power0.easeNone })
  .to('#spark', 0.3, { x: '-161', y: '-315', ease: Power0.easeNone })
  .to('#spark', 0.3, { x: '-161', y: '-355', ease: Power0.easeNone })
  .to('#spark', 0.2, { x: '-181', y: '-355', ease: Power0.easeNone })
  .to('#spark', 1.5, { x: '-181', y: '-80', ease: Power0.easeNone })
  .to('#spark', 0.7, { x: '-51', y: '-80', ease: Power0.easeNone })
  .to('#spark', 0.2, { x: '-51', y: '-60', ease: Power0.easeNone })
  .to('#spark', 0.7, { x: '-181', y: '-60', ease: Power0.easeNone })
  .to('#spark', 0.2, { x: '-181', y: '-40', ease: Power0.easeNone })
  .to('#spark', 0.7, { x: '-51', y: '-40', ease: Power0.easeNone })
  .to('#spark', 0.2, { x: '-51', y: '-20', ease: Power0.easeNone })
  .to('#spark', 0.7, { x: '-181', y: '-20', ease: Power0.easeNone })
  .to('#spark', 0.2, { x: '-181', y: '0', ease: Power0.easeNone })
  .to('#spark', 0.7, { x: '-51', y: '0', ease: Power0.easeNone })
  .to('#spark', 0.2, { x: '-51', y: '20', ease: Power0.easeNone })
  .to('#spark', 1.5, { x: '-341', y: '20', ease: Power0.easeNone })
  .to('#mouth', 0, { opacity: 0 }, '0')
  .to('#mouth', 0.1, { opacity: 1 })

endCardTl.to('.end-card', 1, { opacity: 1 }, '1');

var replay = document.querySelector('.replay');
replay.addEventListener('click', function() {
  endCardTl.pause(0);
  headTl.pause(0);
  machineTl.play(0);
});