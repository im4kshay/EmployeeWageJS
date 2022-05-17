console.log("=-=-=-=-=-Welcome to the Employee Wage Problem-=-=-=-=-=");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_RATE_PER_HR = 20;
const FULL_TIME_HRS = 8;
const PART_TIME_HRS = 4;
const MAX_WORKING_DAYS = 20;
let empWage = 0;
let totalWorkingHrs = 0;
let totalEmpWage = 0;
function getWorkHrs(empCheck)
{
    switch(empCheck)
    {
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        case IS_PART_TIME:
            return PART_TIME_HRS;
        default:
            return 0;
    }
}
let empHrs =0;
for(let day = 1; day <= MAX_WORKING_DAYS; day++)
{
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkHrs(empCheck);
    empWage = EMP_RATE_PER_HR * empHrs;
    console.log("Emp Wage for day "+day+" is "+empWage);
    totalWorkingHrs += empHrs;
}
totalEmpWage = EMP_RATE_PER_HR*totalWorkingHrs;
console.log("Total Employee wage for a Month: "+ totalEmpWage);