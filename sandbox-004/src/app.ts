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