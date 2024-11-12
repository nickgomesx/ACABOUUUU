function randomText(){
    var text = ("abcdefghijklmnopqrstuvwxyz01234567899");
    letter = text[Math.floor(Math.random()* text.length)];
}


  function rain (){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    let left= Math.floor(Math.random() * 320);
    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText = 'z'
    e.style.left = left + 'px';
    e.style.fontSize = 0.5+size+'em';

    setTimeout(function(){
        cloud.replaceChild(e)
    },200)
}
setInterval(function( ){
    rain()
},20);