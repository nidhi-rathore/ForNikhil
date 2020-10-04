var colors = generaterandomcolors(6);

var numsquares = 6;
var squares = document.querySelectorAll('.square');
var resetbutton = document.querySelector("#reset");
var h1 = document.querySelector('h1');
var pickedcolor = randomcolorpick();
var messagedisplay = document.querySelector('#message');
var colorvalue = document.querySelector('h1 span');

var easybtn=document.querySelector('#easybtn');
var hardbtn=document.querySelector('#hardbtn');


easybtn.addEventListener('click',function(){
    resetbutton.textContent='new colors';
    messagedisplay.textContent='';
    hardbtn.classList.remove('selected');
   easybtn.classList.add('selected');
numsquares=3;
   colors=generaterandomcolors(numsquares);
   pickedcolor=randomcolorpick();
   colorvalue.textContent=pickedcolor;


   for(var i=0;i<squares.length;i++){
       if(colors[i])
       squares[i].style.background=colors[i];
       else
       squares[i].style.display='none';
    }
})



hardbtn.addEventListener('click',function(){
    
    resetbutton.textContent='new colors';
    messagedisplay.textContent='';
    hardbtn.classList.add('selected');
    easybtn.classList.remove('selected');
    numsquares=6;
    colors=generaterandomcolors(numsquares);
   pickedcolor=randomcolorpick();
   colorvalue.textContent=pickedcolor;


   for(var i=0;i<squares.length;i++){
    
       squares[i].style.background=colors[i];
     
    
       squares[i].style.display='block';
   }
})
colorvalue.textContent = pickedcolor;

resetbutton.addEventListener('click', function () {
    colors = generaterandomcolors(numsquares);
    pickedcolor = randomcolorpick();
    colorvalue.textContent = pickedcolor;
    
    resetbutton.textContent='new colors';
messagedisplay.textContent='';
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    h1.style.background = 'steelblue';
    if (resetbutton.textContent == 'PLAY AGAIN?')
        resetbutton.textContent = 'New Colors';

})

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedcolor = this.style.background;
        if (clickedcolor === pickedcolor) {
            messagedisplay.textContent = 'CORRECT';
          
            
            resetbutton.textContent = 'PLAY AGAIN?'
            h1.style.background = pickedcolor;
            changecolors(clickedcolor);
        }
        else {
            this.style.background = ' rgb(24, 24, 24)';
            messagedisplay.textContent = 'TRY AGAIN';
       
        }

    })
}

function changecolors(color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function randomcolorpick() {

    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaterandomcolors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomcolorgenerator());
    }

    return arr;
}

function randomcolorgenerator() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}