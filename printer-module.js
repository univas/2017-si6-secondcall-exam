function fancyPrint(employee){
    console.log(" ")
    console.log("Name: " + employee.name)
    console.log("Email: " + employee.email)
    console.log("Photo Link: " + employee.photo)
    console.log("Job Title: " + employee.jobTitle)
    console.log("Date of Birth: " + employee.dateOfBirth)
}

module.exports = {
    fancyPrint
}