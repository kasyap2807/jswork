const balls = document.getElementsByClassName('ball');
//predefined method -- on mouse move
document.onmousemove=(a)=>{
    const x=(a.clientX *100)/window.innerWidth+'%';
    const y=(a.clientY *100)/window.innerHeight+'%';
    for(i=0;i<100;i++){
        balls[i].style.left=x;
        balls[i].style.top=y;
        balls[i].transform='translate(-'+x+',-'+y+')';
    }
};
// function myFunction() {
//     document.getElementById("demo").style.cursor = "";
//   }