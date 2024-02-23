import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";

const Home = () => {
  const [employees, setEmployees] = useState([]);
  const [editvalue, SetEditvalue] = useState({});

  const [index, SetIndex] = useState(-1);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
    console.log("addEmployee", employees);
    SetIndex(-1);
  };

  const deleteEmployee = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
    SetIndex(-1);
  };

  const editEmployee = (index, updatedEmployee) => {
    SetIndex(index);
    SetEditvalue(updatedEmployee);
  };

  const updatedEmployee = (index, updatedEmployee) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index] = updatedEmployee;
    setEmployees(updatedEmployees);
    SetIndex(-1);
    SetEditvalue({});
  };

  return (
    <div className="container d-flex flex-column justify-content-center mt-5">
      <EmployeeForm
        index={index}
        addEmployee={addEmployee}
        updatedEmployee={updatedEmployee}
        editvalue={editvalue}
        SetIndex={SetIndex}
      />
      {employees.length !== 0 && (
        <EmployeeList
          employees={employees}
          deleteEmployee={deleteEmployee}
          editEmployee={editEmployee}
        />
      )}
    </div>
  );
};

export default Home;
