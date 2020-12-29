class Ground
{
   constructor(x,y,w,h)
   {
       this.bodies=Bodies.rectangle(x,y,w,h,{isStatic:true});
       World.add(world,this.bodies);
       this.w=w;
       this.h=h;
       this.image = loadImage("sprites/ground.png");
   }
   display()
   {
       var pos= this.bodies.position;
       push();//to implement the change for current object
       
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.w,this.h);
       pop();//to finish the change right here

   }



}