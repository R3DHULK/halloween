var container = document.querySelector('.parallax-container');
var base = document.querySelector('.parallax-base');


cssParallax(container, base, 20);

function cssParallax(cont, el, radiusVal){
  cont.addEventListener('mousemove', function(event) {
        
     var x = window.innerWidth;
      var y = window.innerHeight;
    
      cx = Math.ceil(x / 2.0);
      cy = Math.ceil(y / 2.0);
      dx = event.pageX - cx;
      dy = event.pageY - cy;
      
      tiltx = (dy / cy)*0.1;
      tilty = - (dx / cx)*0.3; 

      radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
      degree = (radius * radiusVal);

      el.style.transform = 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)';
  });
}





    function onDeviceMotion(event) {
      rotateForce = 10; // max popup rotation in deg
     

      var docX = window.innerWidth;
      var docY = window.innerHeight;

      var accelX = event.beta;  
      var accelY = event.gamma; 
 
      base.style.transform='rotateX(' + accelX + 'deg' + ') rotateY(' + accelY + 'deg' + ')';
    };
    window.addEventListener('deviceorientation', onDeviceMotion, false);
 



var basicTimeline = anime.timeline({ 
  loop: true
});
var dauer = 400;
basicTimeline
  .add({
   targets: '#flash_1',
  opacity:[0, 1, 0, 1, 0],
  translateX: function() { return anime.random(-30, 150); },
  duration: dauer,
  offset: 5700
  })
.add({
   targets: '.lines',
  stroke:[
    {value: '#000'}, 
    {value: '#f00'}, 
    {value: '#000'}, 
    {value: '#f00'}, 
    {value: '#000'}, 
    
  ],
  duration: dauer,
  offset: '-=400'
  })
.add({
   targets: '.stones',
  fill:[
    {value: '#000'}, 
    {value: '#555'}, 
    {value: '#000'}, 
    {value: '#555'}, 
    {value: '#000'}, 
    
  ],
  duration:dauer,
  offset: '-=400'
  })
  .add({
     targets: '#flash_2',
  opacity:[0, 1, 0, 1, 0],
  translateX: function() { return anime.random(-30, 150); },
  duration:dauer,
  offset: 7700
  })
.add({
   targets: '.lines',
  stroke:[
    {value: '#000'}, 
    {value: '#f00'}, 
    {value: '#000'}, 
    {value: '#f00'}, 
    {value: '#000'}, 
    
  ],
  duration:dauer,
  offset: '-=400'
  })
.add({
   targets: '.stones',
  fill:[
    {value: '#000'}, 
    {value: '#555'}, 
    {value: '#000'}, 
    {value: '#555'}, 
    {value: '#000'}, 
    
  ],
  duration:dauer,
  offset: '-=400'
  })
.add({
     targets: 'text',
  opacity:[0, 1, 0, 1, 0],
    duration:dauer+1000,
  offset:  '-=400'
  })
;