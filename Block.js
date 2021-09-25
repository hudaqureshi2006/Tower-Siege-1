class Block{
  constructor(x, y, width, height,colour) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.colour = colour;
      World.add(world, this.body);
    }
    display(){
      push();
      //translate(this.body.position.x, this.body.position.y);
      var pos =this.body.position;
      rectMode(CENTER);
      //fill(rgb(196, 61, 22));
      fill(this.colour);
      rect(pos.x, pos.y, this.width, this.height);
      
      pop();
    }
}