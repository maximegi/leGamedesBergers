function Cloud(){
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = random(0.5, 0.8)
    
    this.display = function() {
      fill(250)
      noStroke();
      ellipse(this.x, this.y, 70 * this.size, 50 * this.size);
      ellipse(this.x + 10, this.y + 10, 70 * this.size, 50 * this.size);
      ellipse(this.x - 20, this.y + 10, 70 * this.size, 50 * this.size);
    }
    
    this.move = function() {
      this.x += 0.5;
      this.y += random(-0.5,0.5);
      
      if(this.x >= width){
        this.x = 0;
      }
      if(this.y >= height){
        this.y = 0;
      }
    }
  }