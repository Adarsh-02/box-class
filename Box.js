class Box {
constructor() {
    var options = { 'restitution': 0.8, ' friction': 0.3, 'density': 1 }

this.body = Bodies.rectangle();
World.add(world,this.body);


}
display() {
var pos = this.body.position;
rectMode(CENTER);
fill(255);
rect(pos.x, pos.y , this.width , this.height);

}
}