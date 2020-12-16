//soal 1
console.log('---soal 1---')
class Animal {
    constructor(name){
    	this._animalName = name
    	this._legs = 4
    	this._cold_blooded = false
    }
    get name(){
    	return this._animalName
    }
    get legs(){
    	return this._legs
    }
    get cold_blooded(){
    	return this._cold_blooded
    }
}
 
class Ape extends Animal {
	constructor(name,legs){
		super(name,legs)
	}
    get legs(){
    	return this._legs
    }
	set legs(x){
		return this._legs = x
	}
	yell(){
		return 'Auoooo!!!'
	}
}

class Frog extends Animal{
	constructor(name,legs){
		super(name,legs)
	}

	jump(){
		return 'Hop Hop!'
	}
}
let sheep = new Animal("shaun");
 
console.log(sheep.name)
console.log(sheep.legs) 
console.log(sheep.cold_blooded) 

let ape = new Ape('King Kong')
ape.legs = 2
let frog = new Frog('Bangkong')
console.log(ape.name,ape.legs,ape.cold_blooded)
console.log(ape.yell())

console.log(frog.name,frog.legs,frog.cold_blooded)
console.log(frog.jump())

//soal 2
console.log('---soal 2---')
class Clock {
  constructor({template}, interval)  {
    this.template = template
    this.interval = interval;
  }
   render = () =>  {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
  stop = () => {
    clearInterval(this.timer);	  	
  };

 start = () => {
    this.render();
    this.timer = setInterval(this.render, this.interval);
  };

}
var clock = new Clock({template: 'h:m:s'}, 1000);
clock.start() 
//clock.stop()
