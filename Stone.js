/*class Stone{
	constructor(x,y,width,height)
	{
		// assign options to the rubber ball
		var options= 
		{
			'
	
		//this.x=x;
		//this.y=y;
        
		//this.r=r;
		this.body=Bodies.rectangle(x, y,width,height, options);
		this.width=this.width;
        this.height=this.height;
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			//translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the rubber ball
			rect(stonepos.x,stonepos.y,this.height,this.width);
			pop()
	}

};*/


/*class Stone 
{
    constructor(x, y, width, height) 
	{
      var options = 
       {
          'restitution':0.8,
		  'friction': 0.9,
		  'density':12
		}
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display()
    {
      var posStone =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(posStone.x, posStone.y, this.width, this.height);
    }
  
};*/





class Stone {
	constructor(x, y, width, height) {
	  var options = {
		  'restitution':0.8,
		  'friction':0.9,
		  'density':12
	  }
	  this.body = Bodies.rectangle(x, y, width, height, options);
	  this.width = width;
	  this.height = height;
	  
	  World.add(world, this.body);
	}
	display(){
	  var Stonepos =this.body.position;
	  //var angle = this.body.angle;
	  push();
	  translate(Stonepos.x, Stonepos.y);
	 // rotate(angle);
	  rectMode(CENTER);
	 // strokeWeight(4);
	  //stroke("black");
	  fill("black");
	  rect(0, 0, this.width, this.height);
	  pop();
	}
  };
  