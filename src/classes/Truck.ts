// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {

    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
    towingCapacity: number;
  
  
  

  // TODO: Create a constructor that accepts the properties of the Truck class
   constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[]
   ){
    super();

    //Initilize Properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.year = year;
    this.model = model;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    if(wheels.length !== 4){
      this.wheels = [new Wheel(), new Wheel(),new Wheel(),new Wheel()];
    }else{
      this.wheels = wheels;
    }
  }
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    if(vehicle.make && vehicle.model && vehicle.weight){
     if(vehicle.weight <= this.towingCapacity){
       console.log(`${vehicle.make} ${vehicle.model} is being towed.`)
     }else{
       console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed.`)
     }
    }else{
     console.log("Vehicle does not have the required properties.");
    }
   }
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
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
   //print details for wheels
    for (let i = 0; i < this.wheels.length; i++) {
      console.log(
          `Wheel ${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`
      );
  }
}
}
// Export the Truck class as the default export
export default Truck;
