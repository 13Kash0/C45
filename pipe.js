function Pipe(){
    this.space=175
    this.top=math.round(random(height/6,3/4*height))
    this.bottom=height-(this.top+this.space)
    this.x=width
    this.w=80
    this.speed=6
    this.highlight=false

    this.hit=function(playerbird){
    if(playerbird.y<this.top || playerbird.y>height){
        
    }
    }
}