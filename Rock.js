class Rock extends BaseClass {
    constructor(x,y){
      super(x,y,120,120);
      this.image = loadImage(rock_img);
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      super.display();
    }
  }