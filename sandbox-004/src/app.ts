type Admin = {
   name: string;
   privileges: string[];
};

type Employee = {
   name: string;
   startDate: Date;
};

// similar to interface type
// interface ElevatedEmployee extends Admin, Employee {}

// intersection type
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
   name: 'Kevin',
   privileges: ['create-server'],
   startDate: new Date()
}

// union type
type Combinable = string | number;
type Numeric = number | boolean;

// intersection types
type Universal = Combinable & Numeric;

// type guard using typeof
function add(a: Combinable, b: Combinable) {
   if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
   }
   return a + b;
}

type UnknownEmployee = Employee | Admin;

// type guard if in check
function printEmployeeInformation(emp: UnknownEmployee) {
   console.log('Name: ' + emp.name);
   if ('privileges' in emp) {
      console.log('Privileges: ' + emp.privileges);
   }
   if ('startDate' in emp) {
      console.log('Start Date: ' + emp.startDate);
   }
}

printEmployeeInformation(e1);

// instanceof type guard
class Car {
   drive() {
      console.log('Driving a car...');
   }
}

class Truck {
   drive() {
      console.log('Driving a truck...');
   }

   loadCargo(amount: number) {
      console.log('Loading cargo...' + amount);
   }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
   vehicle.drive();
   if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
   }
}

useVehicle(v1);
useVehicle(v2);

// discriminated unions
interface Bird {
   type: 'bird';
   flyingSpeed: number;
}

interface Horse {
   type: 'horse';
   runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
   let speed;
   switch (animal.type) {
      case 'bird':
         speed = animal.flyingSpeed;
         break;
      case 'horse':
         speed = animal.runningSpeed;
         break;
   }
   console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 10});