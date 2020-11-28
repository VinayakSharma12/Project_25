class Ball extends BaseClass  {
    constructor(x, y) {
    super(x,y,50,50);
    this.image = loadImage("paperball.png");
    }

    display(){
      super.display();
    }
  }