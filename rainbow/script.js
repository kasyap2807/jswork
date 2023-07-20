const button = document.querySelector("button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const color = ['vilet','indigo','blue','green','yellow','orange','red'];
body.style.backgroundColor='black';
document.addEventListener('click',function(){
    h1.style.color='black';
    const colorIndex=parseInt(Math.random()*color.length);
    document.getElementById("h11").innerHTML=(colorIndex+1)+"."+color[colorIndex];
    body.style.backgroundColor=color[colorIndex];
});
