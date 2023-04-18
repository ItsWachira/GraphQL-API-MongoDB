const Employee= require("../models/employeesModel");

// GraphQL Resolvers
const resolvers = {
    Query: {
        employees: async () => {
          try {
            const employees = await Employee.find({});
            return employees;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch employees');
          }
        },
        getEmployee: async (parent, args) => {
          try {
            const employee = await Employee.findById(args.id);
            return employee;
          } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch employee by ID');
          }
        },
      },
  Mutation: {
    async createEmployee (_, { employeeInput: { name, department, salary } }) {
     
      const newEmployee = new Employee({
        name: name,
        department: department,
        salary: salary
      });
     const response =  await newEmployee.save();
      console.log(newEmployee);
      return {
        id: response._id,
        ...response._doc
      }
    },
    updateEmployee: async (_, {id, employeeInput: {name, department, salary}}) => {
      const updatedEmployee = await Employee.updateOne({ _id: id }, { name, department, salary });
      if (!updatedEmployee) {
        throw new Error(`Employee with ID: ${id} not found`);
      }
      return true; // Return a boolean value indicating update success
    },
    async deleteEmployee (_, {id}){
        const deletedEmployee = await Employee.deleteOne({ _id: id });
        if (!deletedEmployee || deletedEmployee.deletedCount === 0) {
          throw new Error(`Employee with ID ${id} not found`);
        }
        return true; // Return a boolean value indicating deletion success
    },
  },
};

module.exports =  resolvers ;
