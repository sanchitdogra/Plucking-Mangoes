class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }

    fly(){
        this.throw.bodyA=null;
    }

    Launch(bodyA){
        this.throw.bodyA=bodyA;
    }

    display(){
        //var pointA = this.sling.bodyA;
        //var pointB = this.pointB;
        //push();
        //strokeWeight(4);
        //line(pointA.x,pointA.y,pointB.x,pointB.y);
        //pop();
    }
    
}