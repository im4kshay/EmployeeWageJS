console.log("=-=-=-=-=-Welcome to the Employee Wage Problem-=-=-=-=-=");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_RATE_PER_HR = 20;
let empWage = 0;
let empCheck = Math.floor(Math.random()*10)%3;
switch(empCheck)
{
    case IS_FULL_TIME:
        empHrs = 8;
        break;
    case IS_PART_TIME:
        empHrs = 4;
        break;
    default:
        empHrs = 0;
        break;
}
empWage += EMP_RATE_PER_HR*empHrs;
console.log("Employee wage :"+ empWage);