# whose_employee_is_it_anyway

Who's employee Is It Anyway is a command-line application that allows business owners to view and manage their company's departments, roles, and employees. This application provides an interactive interface for organizing and planning the business efficiently.

## Features

- View all departments, roles, and employees.
- Add new departments, roles, and employees to the database.
- Update an employee's role.

## Getting Started

1. Clone the repository to your local machine.
2. Install required packages using `npm install`.
3. Set up your MySQL database connection in the `app.js` file.
4. Run the application using `node app.js`.

## Usage

When you run the application using `node app.js`, you will be presented with a series of options:

1. View all departments
2. View all roles
3. View all employees
4. Add a department
5. Add a role
6. Add an employee
7. Update an employee role
8. Exit

Select the desired option by using the arrow keys and pressing Enter.

### Viewing Data

- When you choose to view all departments, you'll see a formatted table displaying department names and IDs.
- Viewing all roles will display job titles, role IDs, department information, and salaries.
- Viewing all employees will show a formatted table with employee data, including IDs, names, job titles, departments, salaries, and managers.

### Adding Data

- To add a new department, provide the department name when prompted.
- When adding a role, enter the role's name, salary, and select the corresponding department.
- Adding an employee requires their first name, last name, role, and manager.

### Updating Employee Role

Select an employee to update and their new role.

## Technologies Used

- JavaScript
- Inquirer.js
- MySQL2
- console.table

## Limitations

- The application assumes you have set up a MySQL database with the appropriate structure.
- Error handling and validation are not extensively implemented in this version.

## Future Improvements

- Enhance error handling and user input validation.
- Implement more advanced features such as deleting departments, roles, and employees.
- Improve the user interface and add more interactive features.

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to use and modify this code as a foundation for managing your company's departments, roles, and employees. If you have any questions or suggestions, please feel free to contact me.
