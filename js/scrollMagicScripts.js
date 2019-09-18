
// init controller


var controller = new ScrollMagic.Controller();

var controller2 = new ScrollMagic.Controller();
var controller3 = new ScrollMagic.Controller();



var tween = TweenMax.fromTo('#gs',1,{scale:5,opacity:0},{scale:1,opacity:1,ease:Circ.easeOut});





var scene = new ScrollMagic.Scene({
})
.setTween(tween)
.addTo(controller);




var tween2 = TweenMax.fromTo('#elegance',1,{x:500,opacity:0},{x:0,opacity:1,ease:Power4.easeOut})
var tween3 = TweenMax.fromTo('#elegance span',1,{x:500,opacity:0},{x:0,opacity:1,ease:Power4.easeOut})
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".second"
})
.setTween(tween2)
.addTo(controller2);


