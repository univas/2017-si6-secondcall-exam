const employees = require('./db/employeeDB.json')
const { fancyPrint } = require('./printer-module')
const employeeId = process.argv[2]

function findEmployeeById(employeeId){
    return function callback(employee){
        return employeeId == employee.id
    }
}

const employee = employees.find(findEmployeeById(employeeId))
const employeesFound = employees.filter(findEmployeeById(employeeId))

if(employeesFound.length > 0){
    var split = employee.dateOfBirth.split('/')
    var year = split[0]
    var currentYear = 2017
    var age = (currentYear-year)
}

employeesFound.forEach(fancyPrint)

if(employeesFound.length > 0)
    console.log("Age: "+ age)

if(employeesFound.length === 0)
    console.log('Employee not found!')
 
