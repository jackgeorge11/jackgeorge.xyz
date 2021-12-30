let newCursor = $('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    newCursor.css({ 'top': `${e.pageY}px`, 'left': `${e.pageX}px` });
    document.body.style.setProperty('--x',(e.clientX)+'px');
    document.body.style.setProperty('--y',(e.clientY)+'px');
};

var color = (function () {
    var state; // Private Variable

    var pub = {};// public object - returned at end of module

    pub.changeState = function (newstate) {
        state = newstate;
    };

    pub.getState = function() {
        return state;
    }

    return pub; // expose externally
}());

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

$('.name').mousemove(function(event){
    color.changeState(`hsl(${Math.floor(Math.random() * 360)}, 100%, 77%)`)
    $('body').css('background-color', 'black');
    newCursor.removeClass('pulse zoom-out');
    newCursor.addClass('zoom-in zoomed');
    $('.name').css({"color": color.getState(), 'text-decoration': 'underline .8vw'});
    $('.visible').css('color', 'white');
    $('.sub-werds').css('color', 'white')
});

$('.name').mouseleave(async () => {
    $('body').css('background-color', 'transparent');
    $('.name').css({"color": 'black', 'text-decoration': 'none'});
    $('.visible').css('color', 'black');
    $('.sub-werds').css('color', 'black')
    newCursor.removeClass('zoom-in zoomed');
    newCursor.addClass('zoom-out pulse');
    await sleep(300)
    newCursor.removeClass('zoom-out')
})