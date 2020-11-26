class Department {
   // static property
   // static is detached from the class instance, cannot be accessed from non-static parts
   // can't be accessed with this keyword, will need to use the class name
   static fiscalYear = 2020;
   // field definitions
   // private readonly id: string;
   // private name: string;
   // can make variables or functions private
   // private is only made available to typescript
   // protected is different from private, protected can be used in class that extends from its class
   protected employees: string[] = [];

   // shorthand initialization
   constructor(private readonly id: string, public name: string) {
      // this.id = id;
      // this.name = n;
   }

   // static method
   static createEmployee(name: string) {
      return { name: name };
   }

   // this as a parameter to be more specific
   describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
   }

   addEmployee(employee: string) {
      this.employees.push(employee);
   }

   printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
   }
}

// inheritance
class ITDepartment extends Department {
   admins: string[];
   constructor(id: string, admins: string[]) {
      super(id, 'IT');
      this.admins = admins;
   }
}

class AccountingDepartment extends Department {
   private lastReport: string;

   // getter
   // getters have to return something
   get mostRecentReport() {
      if (this.lastReport) {
         return this.lastReport;
      }
      throw new Error('No report found.')
   }

   // setter
   set mostRecentReport(value: string) {
      if (!value) {
         throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
   }

   constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
      this.lastReport = reports[0];
   }

   addEmployee(name: string) {
      if (name === 'Kevin') {
         return;
      }
      this.employees.push(name);
   }

   addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
   }

   printReports() {
      console.log(this.reports);
   }
}

// createEmployee is static, no need for new
const employee1 = Department.createEmployee('Kevin')
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Kevin']);

it.addEmployee('Kevin');
it.addEmployee('Manu');

// can't be added because employees is private
// below should be avoided
// it.employees[2] = 'Andrew';

it.describe();
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Kevin');
accounting.addEmployee('Andrew');

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: it.describe };

// this in this example is accountingCopy
// accountingCopy doesn't have a name property and will therefore return undefined
// accountingCopy.describe();