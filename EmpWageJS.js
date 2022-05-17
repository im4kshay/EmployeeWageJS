console.log("=-=-=-=-=-Welcome to the Employee Wage Problem-=-=-=-=-=");
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const EMP_RATE_PER_HR = 20;
const FULL_TIME_HRS = 8;
const PART_TIME_HRS = 4;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HRS = 100;
let empWage = 0;
let totalWorkingHrs = 0;
let totalEmpWage = 0;
let empDailyWageArr = new Array();
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
function CalculateWage(empHrs){
    return empHrs*EMP_RATE_PER_HR;
}
let empHrs = 0;
let workingDay = 1;
while(workingDay <= MAX_WORKING_DAYS && totalWorkingHrs <= MAX_WORKING_HRS)
{
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkHrs(empCheck);
    empWage = EMP_RATE_PER_HR * empHrs;
    empDailyWageArr.push(CalculateWage(empHrs));
    ///console.log("Emp Wage for day "+workingDay+" is "+empWage);
    totalWorkingHrs += empHrs;
    workingDay++;
}
console.log(empDailyWageArr);
totalEmpWage = CalculateWage(totalWorkingHrs);
console.log("Total Employee wage for a Month: "+ totalEmpWage +" worked for "+totalWorkingHrs+" Hrs");