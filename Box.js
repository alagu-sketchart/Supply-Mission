class Boxes{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var positions = this.body.position;
        fill("red");
        rect(positions.x, positions.y, this.width, this.height);
    }
}