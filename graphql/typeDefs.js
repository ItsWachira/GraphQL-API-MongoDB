const {gql} = require("apollo-server");

const typeDefs = gql`
  type Employee {
    id: ID!
    name: String
    department: String
    salary: String
  }
  input EmployeeInput {
    name: String
    department: String
    salary: String
  }
  type Query { 
    getEmployee(id: ID): Employee #return Employee by id
    employees: [Employee] #return array of Employees
  }

  type Mutation {
    createEmployee(employeeInput: EmployeeInput): Employee
    updateEmployee(id: ID, employeeInput: EmployeeInput): Boolean
    deleteEmployee(id: ID): Boolean
  }
`;

module.exports = typeDefs;