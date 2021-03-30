      let obj2 = document.getElementById("window");
     
      let arr = [];     
      
      let wHeight = obj2.offsetHeight;
      let wWidth = obj2.offsetWidth;

      
      function Obstacle(width, height, x, y)
      {
      
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        
        this.show = function() {
          this.obst = document.createElement("div");
          this.obst.setAttribute("class", "obj2");     

          this.obst.style.width = this.width + "px";
          this.obst.style.height = this.height + "px";
          this.obst.style.left = this.x + "px";
          this.obst.style.top = this.y + "px";
       
          obj2.appendChild(this.obst);          
        
        }
        
      }
    
      let bla = new Obstacle(100, 100, 240, 240);
      bla.show();
      
      let blax = new Obstacle(60, 60, 20, 200);
      blax.show();
      
      let allObstacles = document.getElementsByClassName("obj2");      
    
      function Ball(x, y, color)
      {
      
        this.x = x;
        this.y = y;
        this.color = color;
        this.randX = Math.floor(Math.random() * 5) + 1;
        this.randY = Math.floor(Math.random() * 5) +1;    
        this.posunPoOseX = this.randX;
        this.posunPoOseY = this.randY;     
        
       // this.display = function() 
        //{
          this.obj = document.createElement("div");
          this.obj.setAttribute("id", "test");     

          this.obj.style.left = this.x + "px";
          this.obj.style.top = this.y + "px";
          this.obj.style.background = this.color;
       
          obj2.appendChild(this.obj);          
        
       // }
        
        this.draw = function()
        {      
           for(let i = 0; i < allObstacles.length; i++)
           {
             let obj3 = allObstacles[i];
            
             if(this.y <= 0 || ((this.y > obj3.offsetTop + obj3.offsetHeight - 5) && (this.y <= obj3.offsetTop + obj3.offsetHeight) && (this.x > obj3.offsetLeft - this.obj.offsetWidth) && (this.x < obj3.offsetLeft + obj3.offsetWidth)))                    
             {                                     
               this.posunPoOseY = this.randY;
                this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
             }
        
             if(this.y >= wHeight - this.obj.offsetHeight || ((this.y >= obj3.offsetTop - this.obj.offsetHeight) && (this.y < obj3.offsetTop - 5) && (this.x > obj3.offsetLeft - this.obj.offsetWidth) && (this.x < obj3.offsetLeft + obj3.offsetWidth)))
             {
               this.posunPoOseY = -this.randY;
                this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";                                                                                
        
             }                                         
                                               
             if(this.x <= 0 || ((this.y > obj3.offsetTop - this.obj.offsetHeight) && (this.y < obj3.offsetTop + obj3.offsetHeight) && (this.x > obj3.offsetLeft + obj3.offsetWidth - 5) && (this.x <= obj3.offsetLeft + obj3.offsetWidth)))     
             {                                    
               this.posunPoOseX = this.randX; 
               this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";                   
       
             }
        
             if(this.x >= wWidth - this.obj.offsetWidth || ((this.y > obj3.offsetTop - this.obj.offsetHeight) && (this.y < obj3.offsetTop + obj3.offsetHeight) && (this.x >= obj3.offsetLeft - this.obj.offsetWidth) && (this.x < obj3.offsetLeft - 25))) 
             {                                                                                                     
               this.posunPoOseX = -this.randX;                                                                                        
                  
               this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
               
               //arr.push(new Ball(0, 0, "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"));            
            }                                           
          }                                                                                                                               
          this.x+=this.posunPoOseX;                                                                                                                       
          this.y+=this.posunPoOseY;                       
        
          this.obj.style.left = this.x + "px";                                                               
          this.obj.style.top = this.y + "px";  
          this.obj.style.background = this.color;     
            
        }
      }
        
        for(let i = 0; i < 10; i++)
        {
          arr.push(new Ball(i+10, i+10, "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"));
          
        //  arr[i].display();

        }
        
     let spust = function() {    
       for(let j = 0; j < arr.length; j++)
       {     
         arr[j].draw();       
    
       }           
       
       requestAnimationFrame(spust);
     }        
    
     spust(); 