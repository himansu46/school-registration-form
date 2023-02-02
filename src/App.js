import React from "react";
import { useState } from "react";

export default function App() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Select Gender");
  const [school, setSchool] = useState("Select School");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [fathername, setFatherName] = useState("");
  const [mothername, setMotherName] = useState("");
  const [fatherphoneNumber, setFatherPhoneNumber] = useState("");
  const [emptyError, setEmptyError] = useState("");
  const [firstnameError, setFirstNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [schoolError, setSchoolError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [fathernameError, setFatherNameError] = useState("");
  const [mothernameError, setMotherNameError] = useState("");
  const [fatherphoneNumbererror, setFatherPhoneNumberError] = useState("");
  const [username, setUsername] = useState("");
  const validate = () => {
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      gender === "" ||
      school === "" ||
      phoneNumber === "" ||
      password === "" ||
      fathername === "" ||
      mothername === "" ||
      fatherphoneNumber === ""
    ) {
      setEmptyError("All fields are mandatory");
      setUsername("");
      return false;
    }
    if (!firstname.match(/^[A-Za-z0-9- ]+$/)) {
      setFirstNameError("First Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!lastname.match(/^[A-Za-z0-9- ]+$/)) {
      setLastNameError("Last Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!email.includes("@")) {
      setEmailError("Email must contain @");
      setUsername("");
      return false;
    }
    if (!gender.match(/male|female|other/i)) {
      setGenderError("please identify as male,female or other");
      setUsername("");
      return false;
    }
    if (!school.match(/CSE|MEC|ECE|EE/i)) {
      setSchoolError("please select CSE,MEC,ECE or EE");
      setUsername("");
      return false;
    }
    if (!phoneNumber.match(/^[0-9]+$/)) {
      setPhoneNumberError("Number Must be from 0-9");
      setUsername("");
      return false;
    }
    if (password.length < 8) {
      setPasswordError("Password must contain 8 digits.");
      setUsername("");
      return false;
    }
    if (!fathername.match(/^[A-Za-z0-9- ]+$/)) {
      setFatherNameError("Father's Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!mothername.match(/^[A-Za-z0-9- ]+$/)) {
      setMotherNameError("Mother's Name is not alphanumeric");
      setUsername("");
      return false;
    }
    if (!fatherphoneNumber.match(/^[0-9]+$/)) {
      setFatherPhoneNumberError("Number Must be from 0-9");
      setUsername("");
      return false;
    }
    return true;
  };
  const resetErrorDefault = () => {
    setFirstNameError("");
    setLastNameError("");
    setEmptyError("");
    setEmailError("");
    setGenderError("");
    setSchoolError("");
    setPhoneNumberError("");
    setPasswordError("");
    setFatherNameError("");
    setMotherNameError("");
    setFatherPhoneNumberError("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    resetErrorDefault();
    const isValid = validate();
    if (isValid) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setGender("Select Gender");
      setSchool("Select School");
      setPassword("");
      setPhoneNumber("");
      setFatherName("");
      setMotherName("");
      setFatherPhoneNumber("");
      resetErrorDefault();
      setUsername(firstname);
    }
  };

  return (
    <div className="App">
      <h3 style={{ textAlign: "center", marginTop: "1%", color: "whitesmoke" }}>
        School Registration Form
      </h3>
      <div className="mainBox">
        <form onSubmit={handleSubmit}>
          <div className="studentBox">
            <h5>
              <u>Student Details</u>
            </h5>
            <input
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />{" "}
            <i className="error">
              {firstnameError}
              {lastnameError}
            </i>
            <br />
            <br />
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />
            <i className="error">
              {" "}
              {emailError} {phoneNumberError}
            </i>
            <br />
            <br />
            <select
              name="gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="Select Gender" selected>
                Select Gender
              </option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>{" "}
            <select
              name="gender"
              value={school}
              onChange={(e) => {
                setSchool(e.target.value);
              }}
            >
              <option value="Select School" selected>
                Select School
              </option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="EE">EE</option>
              <option value="MEC">MEC</option>
            </select>{" "}
            <i className="error">
              {genderError}
              {schoolError}
            </i>
            <br />
            <br />
            <input
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />{" "}
            <i className="error"> {passwordError}</i>
            <br />
            <hr></hr>
            <h5>
              <u>Parent Details</u>
            </h5>
            <input
              type="text"
              placeholder="Father's name"
              value={fathername}
              onChange={(e) => {
                setFatherName(e.target.value);
              }}
            />{" "}
            <input
              type="text"
              placeholder="Mother's name"
              value={mothername}
              onChange={(e) => {
                setMotherName(e.target.value);
              }}
            />{" "}
            <i className="error">
              {fathernameError}
              {mothernameError}
            </i>
            <br />
            <br />
            <input
              type="text"
              value={fatherphoneNumber}
              placeholder="Father's Number"
              onChange={(e) => {
                setFatherPhoneNumber(e.target.value);
              }}
            />{" "}
            <i className="error">{fatherphoneNumbererror}</i>
            <br />
            <p className="emptyerror">
              <i> {emptyError}</i>
            </p>
            <hr></hr>
            <button class="bg-primary text-white" type="submit" value="Submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div style={{ textAlign: "center", color: "green" }}>
        <h2 style={{ color: "green" }}>{username ? "Registration Successful. ":" "}</h2>
        <h5 style={{ color: "black" }}>
          {" "}
          {username
            ? "Welcome " +
              username +
              "!"
              
            : " "}
        </h5>
      </div>
    </div>
  );
}
