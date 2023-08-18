const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name',
  });

  // Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
    startApp();
  });

  function startApp() {
    // Use Inquirer to display options and handle user input
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What would you like to do?',
          choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit',
          ],
        },
      ])
      .then((answer) => {
        switch (answer.action) {
          case 'View all departments':
            viewDepartments();
            break;
          case 'View all roles':
            viewRoles();
            break;
          case 'View all employees':
            viewEmployees();
            break;
          case 'Add a department':
            addDepartment();
            break;
          case 'Add a role':
            addRole();
            break;
          case 'Add an employee':
            addEmployee();
            break;
          case 'Update an employee role':
            updateEmployeeRole();
            break;
          case 'Exit':
            connection.end();
            console.log('Goodbye!');
            break;
        }
      });
  }


  function viewDepartments() {

  }
  
  function viewRoles() {
   
  }
  
  function viewEmployees() {
  
  }
  
  function addDepartment() {
  
  }
  
  function addRole() {
   
  }
  
  function addEmployee() {
   
  }
  
  function updateEmployeeRole() {

  }
  