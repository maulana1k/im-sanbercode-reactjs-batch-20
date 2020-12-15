//soal 1
console.log('soal 1')
class Animal {
    constructor(name){
    	this.name = name
    	this.legs = 4
    	this.cold_blooded = false
    }
}
 
class Ape extends Animal {
	constructor(name,legs){
		super(name)
		this.legs = legs
	}
	yell(){
		return 'Auoooo!!!'
	}
}

class Frog extends Animal{
	constructor(name, legs){
		super(name)
		this.legs = legs
	}
	jump(){
		return 'Hop Hop!'
	}
}
var sheep = new Animal("shaun");
 
console.log(sheep.name)
console.log(sheep.legs) 
console.log(sheep.cold_blooded) 

var ape = new Ape('King Kong', 2)
var frog = new Frog('Bangkong', 4)
console.log(ape.name)
console.log(ape.legs)
console.log(ape.cold_blooded)
console.log(ape.yell())
console.log(frog.name)
console.log(frog.legs)
console.log(frog.cold_blooded)
console.log(frog.jump())

//soal 2
console.log('soal 2')

class Clock {
  constructor({template}, timer='')  {
    this.template = template;
    this.timer = timer;
  }
   render=()=>  {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
  stop = () => {
  	if (this.mins > (this.mins+1)) {
    clearInterval(this.timer);	
  	}
  };

 start = () => {
    this.render();
    this.timer = setInterval(this.render, 1000);
  };

}
var clock = new Clock({template: 'h:m:s'});
clock.start() 
