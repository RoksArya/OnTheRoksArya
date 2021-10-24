window.onresize = screen;
window.onload= screen;
var myWidth;
var blockCount= [];
let count=0;
let j=2;
const s=1000;
const m=60*s;
const h=60*m;
const d=24*h;

const countdown = () =>{
    const countTo = new Date("Dec 31, 2021 00:00:00").getTime();
    console.log(countTo);
    const now= new Date().getTime();
    const gap = countTo - now;
    
    
    const tDay = Math.floor(gap / d);
    const tH = Math.floor((gap % d) / h);
    const tM = Math.floor((gap % h) / m);
    const ts = Math.floor((gap % m) / s);
    
//     document.querySelector(".day").innerText = tDay;
    document.querySelector(".hours").innerText = tH+": " ;
    document.querySelector(".minutes").innerText = tM+": " ;
    document.querySelector(".second").innerText = ts+".";
    };
    
    setInterval(countdown,1000);
const hole = () =>{
for(var i=0; i<10; i++)
{var hole = document.createElement("div");
hole.setAttribute("class","hole");
hole.setAttribute("id","hole"+count);


var rnd=  Math.floor(Math.random()*(myWidth));
hole.style.left= rnd  + "px";
hole.style.top= 100 + "px";
arena.appendChild(hole);
blockCount.push(count);
count++;
}
};

hole();

function screen(){
    myWidth = window.innerWidth;
    document.getElementById("size").innerHTML = "Width: " + myWidth + "px" ;
    
}
 var ar= document.getElementById("arena");
  ar.addEventListener("mousemove", function (e) {
  document.getElementById('x-coord').textContent = "X: " + e.x;
  document.getElementById('y-coord').textContent = "Y: " + e.y;
 });            
     

ar.addEventListener("mousemove", function (e){
    var iholeLeft,itop;
    for(var i=0; i<10; i++){
        let current = blockCount[i];
        let ihole = document.getElementById("hole"+current);
        iX= parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
        iY=parseInt(window.getComputedStyle(ihole).getPropertyValue("top"));

         
        setTimeout(function(){
        ihole.style.top = e.y - 5 + "px" ;            
            ihole.style.left = e.x  + "px" ;
    },500);
    
    }

});
