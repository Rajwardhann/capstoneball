class ball
{
    constructor(x,y,r)
    {
        this.x = this.x
        this.y = this.y
        this.r = this.r
        var options=
        {
            isStatic : false,
            density : 10,
            restitution : 0,
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body);
    }

    display()
    {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r);

    }
}