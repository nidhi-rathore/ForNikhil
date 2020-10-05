var character = document.getElementById('character');
var block = document.getElementById('block');

function jump(){
    if(character.classList=='animate')
    {
        return;
    }
    
        character.classList.add('animate');

    
    setTimeout(() => {
        character.classList.remove('animate');
    }, 300);
}

var checkdead = setInterval(() => {
    let charatertop= parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockleft= parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    

    if(blockleft<20&& blockleft>-20 &&  charactertop>=130)
    {
        block.style.animation = "none";
        
        alert("GAME OVER. YOUR SCORE: " +Math.floor(counter/100));
        counter=0;
        block.style.animaton = "block 1s infinite linear";
    }
    else{
        counter++;
        document.getElementById('scorespan').innerHTML = Math.floor(counter/100);
    }

}, 10);