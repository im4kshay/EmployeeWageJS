class EmployeePayroll
    {
   
    //Defining parameterizd constructor of class using constructor keyword
    constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
    }
    //Getter and setter methods for properties of class
    //validating name
    get name() { return this._name };
    set name(name) 
        {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
            if (nameRegex.test(name))
            {
                this._name = name;
            }
            else throw 'Name is Incorrect!'; 
        }
    //validating id
    get id() { return this._id };
    set id(id)
        {
            let idPattern = new RegExp('^[1-9]*$');
            if(idPattern.test(id))
                this._id = id;
            else
                throw "The Given Id Is Invalid";
        }
    //validating salary
    get salary() { return this._salary };
    set salary(salary) 
        {
            let salaryPattern = new RegExp('^[1-9][0-9]*$');
            if(salaryPattern.test(salary))
                this._salary = salary;
            else
                throw "The Given Salary Is Invalid";
        }
    //validating gender
    get gender() { return this._gender };
    set gender(gender)
        {
            let genderPattern = new RegExp('M|F');
            if(genderPattern.test(gender))
                this._gender=gender;
            else
                throw "The Given Gender Is Not Correct";
        }
    //Validate start date is not future date
    get startDate(){ return this._startDate };
    set startDate(startDate)
        {
            let todayDate = new Date();
            if(startDate <= todayDate)
                this._startDate = startDate;
            else
                throw "The Given Date Is Greater Than Current Date";
        }

    //Method to return string of values
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return `Id: ${this.id} \tName: ${this.name} \tSalary: ${this.salary},\tGender: ${this.gender}, \tStart Date: ${empDate}`;
    }
}
//Created obj for class using parameterized conbstructor
try{
    let employPayroll = new EmployeePayroll(1, "Akshay", 46000, "M" ,new Date());
    console.log(employPayroll.toString());
    //Using Set to update values of the properties of class
    employPayroll.name = "Anuj";
    employPayroll.salary = 32000;
    console.log(employPayroll.toString());
    let newEmployeePayroll = new EmployeePayroll(2, "Manali", 30000, "F", new Date());
    console.log(newEmployeePayroll.toString());
}
catch(ex){
    console.error(ex);
}