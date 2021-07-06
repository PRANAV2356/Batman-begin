class drop{
constructor(x,y){
this.t=b.circle(x,y,10)
w.add(d,this.t)
}
display(){
ellipseMode(RADIUS)
fill("blue")
ellipse(this.t.position.x,this.t.position.y,10)
}
}