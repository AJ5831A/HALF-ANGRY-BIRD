class DECENTGROUND {
    constructor(){
        var features = {
            isStatic : true
          
          }
          this.gnd = Bodies.rectangle (400,790,800,10,features)
          World.add(myWorld,this.gnd)
    }
    display()
    {
        rectMode(CENTER)
 rect(this.gnd.position.x,this.gnd.position.y,800,10)
    }
}