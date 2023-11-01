var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  dot = select('#dot'),
  flameMask = select('#flameMask'),
  flameGroup = select('.flameGroup'),
  pContainer = select('.pContainer'),
    mainTl = new TimelineMax()

TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set(pContainer, {
  x:20,
  y: 15,
  transformOrigin: '50% 50%'
})
var tl = new TimelineMax({});
tl.from('.wholePumpkin',1, {
 y:-500,
 ease:Power3.easeIn
})

.to('.wholePumpkin',0.7, {
 rotation:-12,
 transformOrigin:'50% 70%',
 ease:Power3.easeOut
},'-=0')
.to('.wholePumpkin',0.973, {
 rotation:0,
 ease:Sine.easeInOut
},'-=0.3')

.to('.pumpkinCover', 3, {
 alpha:0,
 onStart:createParticles,
 ease: RoughEase.ease.config({
      template: Power0.easeNone,
      strength: 1,
      points: 50,
      taper: "none",
      randomize: true,
      clamp: false
    })
},'-=0')
.staggerFrom(['.topTextGroup', '.botTextGroup'], 1, {
 alpha:0,
 ease:RoughEase.ease.config({
      template: Power0.easeNone,
      strength: 1,
      points: 50,
      taper: "none",
      randomize: true,
      clamp: false
    })
},0.6,'-=2')

function createParticles(){
 
var i = 100,  p;
while (--i > -1) {
  p = dot.cloneNode(true)
  pContainer.appendChild(p);
  //p.setAttributeNS(xlinkns, "xlink:href", '#dot');

  //set the particles' transform origin to be in the middle
  TweenMax.set(p, {
    transformOrigin: '50% 50%',
    x: randomBetween(-26, -20),
    y: randomBetween(80, 90)
  })

  var particleTl = new TimelineMax({});
  particleTl.to(p, randomBetween(1, 4), {
    physics2D: {
      velocity: randomBetween(10, 30),
      angle: randomBetween(-90, -80),
      gravity: 0
    },

    scale: 0.58,
    repeat: -1
  });

  mainTl.add(particleTl, i / 20)

}

mainTl.seek(0).timeScale(6) ;
 
 innerLightFlicker();
 
 //ScrubGSAPTimeline(mainTl)
}

function innerLightFlicker() {

  TweenMax.to('.lanternTop', randomBetween(12, 19) / 10, {
    stopColor: '#741B16',
    repeat: 1,
    ease: RoughEase.ease.config({
      template: Power0.easeNone,
      strength: 3,
      points: 10,
      taper: "none",
      randomize: true,
      clamp: false
    }),
    onRepeat: innerLightFlicker
  })

  TweenMax.to('.depthGradMid', 0.6, {
    stopColor: '#B24A1D',
    repeat: 1,
    ease: RoughEase.ease.config({
      template: Power0.easeNone,
      strength: 3,
      points: 2,
      taper: "none",
      randomize: true,
      clamp: false
    }),
    yoyo: true
  })
  
  TweenMax.to('#pumpkinBgGrad', 0.2,{
   attr:{
    cy:randomBetween(330, 360)
   },    
   ease: RoughEase.ease.config({
      template: Power0.easeNone,
      strength: 1,
      points: 2,
      taper: "none",
      randomize: false,
      clamp: false
    }),
  })

}

//createParticles();
//innerLightFlicker();



function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//TweenMax.globalTimeScale(0.5)