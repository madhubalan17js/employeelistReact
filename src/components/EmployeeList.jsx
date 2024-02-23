import React from "react";

const EmployeeList = ({ employees, deleteEmployee, editEmployee }) => {
  return (
    <div className="mt-5 table-container">
      <h5>Employees List</h5>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Mode Of Contact</th>
            <th>Marital Status</th>
            <th>Immediate Joiner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.middleName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.gender}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.modeOfContact.join(",")}</td>
              <td>{employee.maritalStatus}</td>
              <td>{employee.immediateJoiner}</td>
              <td>
                <button
                  className="edit-btn m-2"
                  onClick={() => editEmployee(index, employee)}
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteEmployee(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
