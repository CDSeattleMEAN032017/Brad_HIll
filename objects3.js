function VehicleConstructor(name, wheels, passangers, speed){
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";
  var self = this;
  this.distance_Travelled = 0;
  this.speed = speed;
  this.name = name;
  this.wheels = wheels;
  this.passangers = passangers;

  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i <17;i+=1){
    vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }

}
VehicleConstructor.prototype.Move = function(noise){
  this.updateDistance_Travelled();
  this.makeNoise(noise);
  return this;
 }

VehicleConstructor.prototype.makeNoise = function(sound){
  console.log(`The ${this.name} sounds like ${sound}`);
  return this;
}

VehicleConstructor.prototype.pickUp = function(peeps){
  console.log(`We currently have ${this.passangers} passangers. We are to pick up ${peeps} people at the next stop. After we leave we will have ${this.passangers + peeps} passangers.  `);
  return this;
}

VehicleConstructor.prototype.checkMiles = function(){
console.log(this.distance_Travelled +' Miles Traveled.');
  return this;
}

VehicleConstructor.prototype.updateDistance_Travelled = function(){
  this.distance_Travelled += this.speed;
  console.log(this.distance)
  return this;
}

var car = new VehicleConstructor('car', 4, 4, 80);


console.log('***************');
var bus = new VehicleConstructor('bus',6,10,10);
console.log('***************');
bus.Move('honk');
console.log('***************');
bus.pickUp(10);
console.log('***************');
bus.checkMiles();
