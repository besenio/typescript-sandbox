class Department {
   name: string;
   // can make variables or functions private
   // private is only made available to typescript
   private employees: string[] = [];

   constructor(n: string) {
      this.name = n;
   }

   // this as a parameter to be more specific
   describe(this: Department) {
      console.log('Department: ' + this.name);
   }

   addEmployee(employee: string) {
      this.employees.push(employee);
   }

   printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
   }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Kevin');
accounting.addEmployee('Manu');

// can't be added because employees is private
// accounting.employees[2] = 'Andrew';

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// this in this example is accountingCopy
// accountingCopy doesn't have a name property and will therefore return undefined
// accountingCopy.describe();