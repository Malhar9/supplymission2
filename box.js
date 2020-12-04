class Box {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      world.add(world, this.body);
    }
    display(){
      
     
      fill("red");
      rect(0, 0, this.width, this.height);
      
    }
  };
  