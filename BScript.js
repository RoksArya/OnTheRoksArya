let myWidth;
let myHeight;
let time =0;

window.onresize = screen;
window.onload= screen;
function screen(){
    
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
 
    
}

var bball= document.getElementById("bball");
var ar= document.getElementById("game");
var lnk= document.getElementById("footer");
var interval;
var both=0,bothM=0;
var count=0;

var blockCount= [];

function mLeft(){
    var left=parseInt(window.getComputedStyle(bball).getPropertyValue("left"));
   if(left>=-2) 
    bball.style.left = left - 2 + "px";
   if(left<=-2)
    bball.style.left = .75*myWidth + "px";
 

}
function mRight(){
    var left=parseInt(window.getComputedStyle(bball).getPropertyValue("left"));
    if(left<(.75*myWidth-20)){
    bball.style.left = left + 2 + "px";
    }
    else
    bball.style.left = 0 + "px" ;
}

document.addEventListener("keydown", event =>{
  if(both==0){
      both++;
        if(event.key==="ArrowLeft"){
         interval = setInterval(mLeft, 1);     
        }
        if(event.key==="ArrowRight"){
          interval = setInterval(mRight, 1); 
        }
        
  }  
});

document.addEventListener("keyup", event =>{
    clearInterval(interval);
    both=0;
    bothM=0;
});
var blocks = setInterval(function(){
    var lastBlck = document.getElementById("block"+(count-1));
    var lastHol = document.getElementById("block"+(count-1));
    var poit = document.getElementById("block"+(count-1));
    if(count>0){
        var LBTop = parseInt(window.getComputedStyle(lastBlck).getPropertyValue("top"));
        var LHTop = parseInt(window.getComputedStyle(lastHol).getPropertyValue("top"));
        var LPTop = parseInt(window.getComputedStyle(lastHol).getPropertyValue("top"));
        
    }
    if(LBTop< (myHeight - 150)|| count==0){
        var block = document.createElement("div");
        var hole = document.createElement("div");
        var poit = document.createElement("div");
        block.setAttribute("class","block");
        block.setAttribute("id","block"+count);
        poit.setAttribute("class","poit");
        poit.setAttribute("id","poit"+count);
        hole.setAttribute("class","hole");
        hole.setAttribute("id","hole"+count);
        block.style.top= LBTop + 100 + "px";
        hole.style.top= LHTop + 100 + "px";
        poit.style.top= LPTop + 140 + "px";
        
       let from=.125*myWidth, to=(.75*myWidth)-(from);
        var rnd=  Math.floor(from + Math.random()*(to) ) -80 ;
        if(rnd<0)
         rnd=0;
         poit.style.left = rnd + "px";
        
         var rnd=  Math.floor(from + Math.random()*(to) ) -80 ;
        if(rnd<0)
         rnd=0;
        
        hole.style.left = rnd + "px";
        Arena.appendChild(block);
        Arena.appendChild(hole);
        Arena.appendChild(poit);
        blockCount.push(count);
        count++;    
    }
    var balTop = parseInt(window.getComputedStyle(bball).getPropertyValue("top"));
    var balLeft = parseInt(window.getComputedStyle(bball).getPropertyValue("left"));
    var drop=0;
    if(balTop <= 0){
        alert("Hey hey hey!! Watch It!!. Game over. score:" + time);
        clearInterval(blocks);
        location.reload();
    }
    for(var i=0; i< blockCount.length; i++){
        let current = blockCount[i];
        let iblock = document.getElementById("block"+current);
        let ihole = document.getElementById("hole"+current);
        let ipoit = document.getElementById("poit"+current);
        let iblockTop= parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
        iblock.style.top = iblockTop - 0.5 + "px" ;
        ihole.style.top = iblockTop - 0.5 + "px" ;
        ipoit.style.top = iblockTop - 0.5 + "px" ;
         
        if(iblockTop <-20){
            time++;
            blockCount.shift();
            iblock.remove();
            ihole.remove();
            ipoit.remove();
        }
        if(iblockTop-20<balTop && iblockTop > balTop){
            drop++;
            let iholeLeft= parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
           let ipoitLeft= parseFloat(window.getComputedStyle(ipoit).getPropertyValue("left"));
            if( (iholeLeft<= balLeft && iholeLeft+20>=balLeft)  || (balLeft +20 < 0 )|| (balLeft+20>=  .75*myWidth    )){
                drop=0;
            }
        if( ipoitLeft<= balLeft && ipoitLeft+20>=balLeft){
            ipoit.style.opacity=0;
        }
           
        }
    }
    if(drop==0){
        if(balTop < .85*myHeight){
        bball.style.top = balTop + 2 + "px";
    }}
    else{
        bball.style.top = balTop - 0.5 +"px";
        
    }

},1);


  function mCLeft(){
    var left=parseInt(window.getComputedStyle(bball).getPropertyValue("left"));
        if(left>=-2) 
    bball.style.left = left - 2 + "px";
   if(left<=-2)
    bball.style.left = .75*myWidth + "px";
}
function mCRight(){
    var left=parseInt(window.getComputedStyle(bball).getPropertyValue("left"));
    if(left<(.75*myWidth-20)){
    bball.style.left = left + 2 + "px";
    }
    else
    bball.style.left = 0 + "px" ;
     
}

document.addEventListener("mousedown", function (e) {
    var left=parseInt(window.getComputedStyle(bball).getPropertyValue("left"));
    myWidth = window.innerWidth;
   
    if(bothM==0){ 
        bothM++;  
       if(e.x < (myWidth/2))
       interval = setInterval(mCLeft,1);
       else
       interval= setInterval(mCRight,1);
        
    
    }
});   
document.addEventListener("mouseup", function(e){
   setTimeout( function(){
    clearInterval(interval);
       both=0;
    bothM=0;
   },800);
});

