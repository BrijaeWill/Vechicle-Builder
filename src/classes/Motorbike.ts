// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle{
  // TODO: Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
 //Constructor
 constructor(
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[]
 ) {
  //call constructor of parent class
  super();

  //Initlizie Properties
  this.vin = vin;
  this.color = color;
  this.make = make;
  this.model = model;
  this.year = year;
  this.weight = weight;
  this.topSpeed = topSpeed;
  if(wheels.length !== 2) {
    this.wheels = [new Wheel(),new Wheel()];
  }else{
    this.wheels = wheels;
  }
}
    
      wheelie(): void{
        console.log(`${this.model} ${this.make} is doing a wheelie!`);
    
    }
    
  // TODO: Override the printDetails method from the Vehicle class
  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

  
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Print details of the wheels
    for (let i = 0; i < this.wheels.length; i++) {
      console.log(
        `Wheel ${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`
      )
  }
}
}
// Export the Motorbike class as the default export
export default Motorbike;
