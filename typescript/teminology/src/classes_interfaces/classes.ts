abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // name: string;  // same as public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log();
  }

  static createEmployee(name: string) {
    console.log(Department.fiscalYear);
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // this.id = 'd2'
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

//********* IT DEPARTMENT */
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log('IT Department: ' + this.id);
  }
}

//********* Accounting DEPARTMENT */
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    // inside static function this is accessible
    if (this.instance) {
      // if(AccountingDepartment.instance)
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department: ' + this.id);
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  addEmployee(name: string) {
    if (name === 'Max') {
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

//********* IT OBJECT */
const it = new ITDepartment('d1', ['Max']);

const employee = Department.createEmployee('viki');
console.log(`employee: ${employee.name}`);

it.addEmployee('Max');
it.addEmployee('Viki');

it.describe();
it.printEmployeeInformation();
console.log(it);

//********* Accounting OBJECT */
// const accounting = new AccountingDepartment('d1', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year end report';
console.log(accounting.mostRecentReport);
accounting.addReport('Something went wrong..');
accounting.printReports();
accounting.describe();

// Calling object describe in another object
// const accountingCopy = { name: 'Dummy', describe: accounting.describe };
// accountingCopy.describe(); // NOT SHOWING ERROR

// Reslut
// Department: Accounting
// Department: undefined
