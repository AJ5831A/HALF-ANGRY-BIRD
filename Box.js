class Box {
    constructor(x,y,w,h){
        var features = {
            isStatic : true
          
          }
          this.box = Bodies.rectangle (x,y,w,h,features)
          World.add(myWorld,this.box)
    }
    display()
    {
        rectMode(CENTER)
 rect(this.box.position.x,this.box.position.y,50,50)
    }
}