var e =Matter.Engine
var w =Matter.World
var b =Matter.Bodies
var d1
var h
dArray=[]
function preload(){
    
}
var c ,d
function setup(){
c=e.create()
d=c.world
createCanvas(400,600)
h=new Boy(200,500)
}

function draw(){

  e.update(c)  
  background("black")
  h.display()
  if(frameCount%10===0){
    d1=new drop(random(0,400),10)
dArray.push(d1)
  }
for(var i=0;i<dArray.length;i=i+1){
    dArray[i].display()
}
 
}   

