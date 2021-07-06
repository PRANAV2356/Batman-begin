class Boy{
    constructor(x,y){
    this.t=b.circle(x,y,100,{isStatic:true})
    w.add(d,this.t)
    this.v=loadImage("images/WalkingFrame/walking_4.png")
    }
    display(){
imageMode(RADIUS)
    image(this.v,this.t.position.x,this.t.position.y,100,100)
    }
    }