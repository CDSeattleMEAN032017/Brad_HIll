function VehicleConstructor(name, wheels, passangers, speed){
  var self = this;
  var distance_Travelled = 0;
  this.speed = speed;
  var updateDistance_Travelled = function(){distance_Travelled += self.speed}
  this.name = name;
  this.wheels = wheels;
  this.passangers = passangers;
  this.Move = function(noise){updateDistance_Travelled(), this.makeNoise(noise);}
  this.makeNoise = function(sound){console.log(`The ${this.name} sounds like ${sound}`);}
  this.pickUp = function(peeps){
    console.log(`We currently have ${this.passangers} passangers. We are to pick up ${peeps} people at the next stop. After we leave we will have ${this.passangers + peeps} passangers.  `);}
  this.checkMiles = function(){console.log(distance_Travelled +' Miles Traveled.');}
}

console.log('***************');
var bus = new VehicleConstructor('bus',6,10,10);
console.log('***************');
bus.Move('honk');
console.log('***************');
bus.pickUp(10);
console.log('***************');
bus.checkMiles();
