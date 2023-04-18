const {model, Schema} = require('mongoose');


const employeeSchema = new Schema({
    name: String,
    department: String,
    salary: String,

});


module.exports = model('Employee', employeeSchema);