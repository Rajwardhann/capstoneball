class rope
{
    constructor(bodyA,pointB)
    {
        var options=
        {
            bodyA : bodyA,
            pointB : pointB,
            length : 20,
            stiffness :0.002
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display()
    {
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB;
        line(pointB.x,pointB.y,pointA.x,pointA.y);
    }
}