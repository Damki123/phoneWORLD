// menu

const tl = new TimelineMax();

document.querySelector('.hamburger').addEventListener('click',() =>{
    tl          
        .restart()
        .timeScale(1)
        .to('#menu',.85,{width:'100%',ease:Power4.easeOut})
        .staggerTo('.link',.8,{y:'0',opacity:'1',ease:Power2.easeOut},.1)
        .fromTo('.link-desc',.8,{opacity:0},{opacity:'1',ease:Power2.easeOut},"-=1.2")
    document.querySelector('body').classList.add('menu-active');
})

document.querySelector('#close-menu').addEventListener('click',() =>{
    document.querySelector('body').classList.remove('menu-active');
    tl.reverse();
})

var link1 = document.querySelector('.link1');
var link2 = document.querySelector('.link2');
var link3 = document.querySelector('.link3');
var link4 = document.querySelector('.link4');

link1.addEventListener('click',() => {
    document.querySelector('body').classList.remove('menu-active');
    tl.reverse().timeScale(3);
    window.location="#first";
})
link2.addEventListener('click',() => {
    document.querySelector('body').classList.remove('menu-active');
    tl.reverse().timeScale(3);
    window.location="#second";
})
link3.addEventListener('click',() => {
    document.querySelector('body').classList.remove('menu-active');
    tl.reverse().timeScale(3);
    window.location="#third";
})
link4.addEventListener('click',() => {
    document.querySelector('body').classList.remove('menu-active');
    tl.reverse().timeScale(3);
    window.location="#fourth";
})

// changing menu description based on hovering links

const title = document.querySelector('.desc-title');
const description = document.querySelector('.link-desc p');
const number = document.querySelector('.title-number');


//link1
document.querySelector('.link1').addEventListener('mouseenter',function(){
    var linkNumber = document.querySelector('.number1');
    var linkName = document.querySelector('.link-name1');
    number.innerHTML = linkNumber.innerHTML;
    title.innerHTML = linkName.innerHTML;
    description.innerHTML = "Witajcie w mlecznej krainie";
})


//link2
document.querySelector('.link2').addEventListener('mouseenter',function(){
    var linkNumber = document.querySelector('.number2');
    var linkName = document.querySelector('.link-name2');
    number.innerHTML = linkNumber.innerHTML;
    title.innerHTML = linkName.innerHTML;
    description.innerHTML = "Tu życie najsmaczniej płynie";
})


//link3
document.querySelector('.link3').addEventListener('mouseenter',function(){
    var linkNumber = document.querySelector('.number3');
    var linkName = document.querySelector('.link-name3');
    number.innerHTML = linkNumber.innerHTML;
    title.innerHTML = linkName.innerHTML;
    description.innerHTML = "Tu wszyscy śmieją się zdrowo";
})


//link4
document.querySelector('.link4').addEventListener('mouseenter',function(){
    var linkNumber = document.querySelector('.number4');
    var linkName = document.querySelector('.link-name4');
    number.innerHTML = linkNumber.innerHTML;
    title.innerHTML = linkName.innerHTML;
    description.innerHTML = "Mlecznie i czekoladowo";
})


//end


// menu planet moving

var planet = document.querySelector('#planet');
var logo = document.querySelector('#menu-logo');
var close = document.querySelector('#close-menu');
var phoneSec1 = document.querySelector('.first img');

document.querySelector('#menu').addEventListener('mousemove',function(e){ 
    var x = 1 * event.clientX * 10 / window.innerWidth + '%';
    var x1 = -1 * event.clientX * 10 / window.innerWidth + '%';
    var y =1* event.clientY * 10 / window.innerHeight + '%';
    var y1 =1* event.clientY * 10 / window.innerHeight + '%';
    
    planet.style.transform = "   translateX(" + x +") translateY(" + y +")";
    planet.style.transition = "all 2s linear";
    logo.style.transform = "translateX(" +  x1 + ") translateY(" +  y1 + ")";
    logo.style.transition = "all 1s linear";
})


document.querySelector('.first').addEventListener('mousemove', function(e) {
    var x = 1 * event.clientX * 10 / window.innerWidth + '%';
    var y =1* event.clientY * 10 / window.innerHeight + '%';
    phoneSec1.style.transform = "translateX(" +  x + ") translateY(" +  y + ")";
    phoneSec1.style.transition = "all 1s linear";
})