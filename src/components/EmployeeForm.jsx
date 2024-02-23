import React, { useState, useEffect } from "react";

const EmployeeForm = ({
  addEmployee,
  updatedEmployee,
  index,
  SetIndex,
  editvalue,
}) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [modeOfContact, setModeOfContact] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [immediateJoiner, setImmediateJoiner] = useState();

  useEffect(() => {
    if (index > -1) {
      setFirstName(editvalue?.firstName);
      setMiddleName(editvalue?.middleName);
      setLastName(editvalue?.lastName);
      setGender(editvalue?.gender);
      setPhoneNumber(editvalue?.phoneNumber);
      setModeOfContact(editvalue?.modeOfContact);
      setMaritalStatus(editvalue?.maritalStatus);
      setImmediateJoiner(editvalue?.immediateJoiner);
    }
  }, [editvalue]);

  const handleClear = () => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setGender("");
    setPhoneNumber("");
    setModeOfContact([]);
    setMaritalStatus("");
    setImmediateJoiner("");
    SetIndex(-1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    if (
      !firstName ||
      !lastName ||
      !gender ||
      !phoneNumber ||
      !maritalStatus ||
      !immediateJoiner
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (index > -1) {
      updatedEmployee(index, {
        firstName,
        middleName,
        lastName,
        gender,
        phoneNumber,
        modeOfContact,
        maritalStatus,
        immediateJoiner,
      });
      console.log(
        " Update",
        firstName,
        middleName,
        lastName,
        gender,
        phoneNumber,
        modeOfContact,
        maritalStatus,
        immediateJoiner
      );
    } else {
      addEmployee({
        firstName,
        middleName,
        lastName,
        gender,
        phoneNumber,
        modeOfContact,
        maritalStatus,
        immediateJoiner,
      });
      console.log(
        " submit",
        firstName,
        middleName,
        lastName,
        gender,
        phoneNumber,
        modeOfContact,
        maritalStatus,
        immediateJoiner
      );
    }

    handleClear();
  };

  return (
    <div className="">
      <h5 className="text-center">Employee Form</h5>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="Enter First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Middle Name:
          <input
            type="text"
            name="middleName"
            placeholder="Enter Middle name"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <div>
          Gender:<br></br>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          <br></br>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
          <br></br>
          <label>
            <input
              type="radio"
              name="gender"
              value="others"
              checked={gender === "others"}
              onChange={(e) => setGender(e.target.value)}
            />
            Others
          </label>
        </div>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <div>
          Mode of contact:<br></br>
          <label>
            <input
              type="checkbox"
              name="modeOfContact"
              value="email"
              checked={modeOfContact.includes("email")}
              onChange={(e) => {
                const { value, checked } = e.target;
                if (checked) {
                  setModeOfContact([...modeOfContact, value]);
                } else {
                  setModeOfContact(
                    modeOfContact.filter((method) => method !== value)
                  );
                }
                console.log(modeOfContact);
              }}
            />
            Email
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="modeOfContact"
              value="phone"
              checked={modeOfContact.includes("phone")}
              onChange={(e) => {
                const { value, checked } = e.target;
                if (checked) {
                  setModeOfContact([...modeOfContact, value]);
                } else {
                  setModeOfContact(
                    modeOfContact.filter((method) => method !== value)
                  );
                }
                console.log(modeOfContact);
              }}
            />
            Phone
          </label>
        </div>
        <label>
          Marital Status:
          <select
            name="maritalStatus"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value)}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </label>
        <div>
          Immediate joiner:
          <label>
            <input
              type="radio"
              name="immediateJoiner"
              value="Yes"
              checked={immediateJoiner === "Yes"}
              onChange={(e) => setImmediateJoiner(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="immediateJoiner"
              value="No"
              checked={immediateJoiner === "No"}
              onChange={(e) => setImmediateJoiner(e.target.value)}
            />
            No
          </label>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="me-5">
            {index > -1 ? "Update" : "Submit"}
          </button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
