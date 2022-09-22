import React, { Component } from "react";
import swal from "sweetalert";
import AdminServiceMethods from "../service/AdminServiceMethods";

class AddNewDoctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      dob: "",
      gender: "",
      mobileNumber: "",
      area: "",
      city: "",
      state: "",
      languages: "",
      beganPractice: "",
      fees: "",
      link: "",
      qualification: "",
      specialization: "",
      message: null,
    };

    this.addDoctor = this.addDoctor.bind(this);
  }

  validatePassword() {
    let password = document.getElementById("pwd").value;
    var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{5,}$/;

    if (regexPassword.test(password) === true) {
      document.getElementById("passwordVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("passwordVr").innerHTML =
        "password must be alphanumeric and should contains at least a special character with length 5";
    }
  }

  validateEmail() {
    let email = document.getElementById("email").value;

    var regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(email) === true) {
      document.getElementById("emailVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("emailVr").innerHTML =
        "email format should be 'abc@gmail.com'";
    }
  }

  removeWarnings() {
    // document.getElementById("passwordVr").innerHTML = "";
    // document.getElementById("emailVr").innerHTML = "";
    // document.getElementById("mobileNumberVr").innerHTML = "";
  }

  validateMobileNumber() {
    let number = document.getElementById("mobileNumber").value;
    if (/^\d{10}$/.test(number)) {
      document.getElementById("mobileNumberVr").innerHTML = "";
    } else {
      document.getElementById("mobileNumberVr").innerHTML =
        "Phone number must be 10 digits.";

      return false;
    }
  }

  validateUname() {
    let Uname = document.getElementById("Username").value;

    if (Uname !== "") {
      document.getElementById("UnameVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("UnameVr").innerHTML =
        "Username Can not be empty ";
    }
  }

  validateFname() {
    let Fname = document.getElementById("firstName").value;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (Fname !== "") {
      if (format.test(Fname) == false) {
        document.getElementById("FNameVr").innerHTML = "";
        return true;
      } else {
        document.getElementById("FNameVr").innerHTML =
          "Firstname can not contain special Characters";
      }
    } else {
      document.getElementById("FNameVr").innerHTML =
        "Firstname Can not be empty";
    }
  }

  validateLname() {
    let Lname = document.getElementById("lastName").value;
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (Lname !== "") {
      if (format.test(Lname) == false) {
        document.getElementById("LNameVr").innerHTML = "";
        return true;
      } else {
        document.getElementById("LNameVr").innerHTML =
          "Lastname can not contain special Characters";
      }
    } else {
      document.getElementById("LNameVr").innerHTML =
        "Lastname Can not be empty";
    }
  }

  validateArea() {
    let Area = document.getElementById("area").value;

    if (Area !== "") {
      document.getElementById("AreaVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("AreaVr").innerHTML = "Area Can not be empty";
    }
  }

  validateCity() {
    let Area = document.getElementById("city").value;

    if (Area !== "") {
      document.getElementById("CityVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("CityVr").innerHTML = "Please enter your city";
    }
  }

  validateState() {
    let State = document.getElementById("state").value;

    if (State !== "") {
      document.getElementById("StateVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("StateVr").innerHTML = "Please enter your State";
    }
  }

  validateLanguages() {
    let Languages = document.getElementById("languages").value;

    if (Languages !== "") {
      document.getElementById("LangVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("LangVr").innerHTML = "Please enter Languages ";
    }
  }

  validateFees() {
    let Fees = document.getElementById("fees").value;

    if (Fees !== "") {
      document.getElementById("FeesVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("FeesVr").innerHTML =
        "Please enter your Appointment Fee ";
    }
  }

  validateQualification() {
    let Qualification = document.getElementById("qualification").value;

    if (Qualification !== "") {
      document.getElementById("QualVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("QualVr").innerHTML =
        "Please enter your Qualification";
    }
  }

  validateLink() {
    let Link = document.getElementById("link").value;

    if (Link !== "") {
      document.getElementById("LinkVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("LinkVr").innerHTML =
        "Please enter your Link for Appoimtments";
    }
  }

  addDoctor = (e) => {
    e.preventDefault();
    console.log(this.state.beganPractice);
    let doctor = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      dob: this.state.dob,
      gender: this.state.gender,
      mobileNumber: this.state.mobileNumber,
      area: this.state.area,
      city: this.state.city,
      state: this.state.state,
      languages: this.state.languages,
      beganPractice: this.state.beganPractice,
      fees: this.state.fees,
      link: this.state.link,
      qualification: this.state.qualification,
      specialization: this.state.specialization,
    };

    AdminServiceMethods.addNewDoctor(doctor)
      .then((res) => {
        console.log(res.data);
        this.setState({ message: "Doctor added successfully." });
        swal("success", this.state.message, "success");
        this.props.history.push("/adminDashboard");
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        //err.response.data => DTO on the server side : ErrorResponse
        swal("error", "Sorry empty fields are not allowed", "error");
        //this.props.history.push("/adminDashboard");
      });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSpecialization = (e) => {
    this.setState({ specialization: e.target.value });
  };

  render() {
    return (
      <>
        <div
          className="container-fluid    overflow-hidden docBack"
          style={{ minHeight: "100vh" }}
        >
          <div className="">
            <div className="row mt-3">
              <div className="col-sm-8">
                <h2 className="fw-bold text-end"> Doctor Registration</h2>
              </div>
              <div className="col-sm-4">
                <button
                  className="btn btn-danger text-uppercase offset-8"
                  onClick={() => {
                    this.props.history.push("/adminDashboard");
                  }}
                >
                  Go Back
                </button>
              </div>
            </div>
            <div className="row justify-content-center">
              <form
                className="mb-5 shadow p-2 text-light col-8"
                style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              >
                <div className="form-group row my-3 justify-content-center">
                  <label htmlFor="Username" className="col-2 col-form-label">
                    Username
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      id="Username"
                      className="form-control"
                      placeholder="Enter a unique username"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChange}
                      onBlur={this.validateUname}
                      onFocus={this.removeWarnings}
                      required
                    />
                    <span style={{ color: "red" }} id="UnameVr"></span>
                  </div>
                </div>
                <div className="form-group row my-3 justify-content-center">
                  <label htmlFor="firstName" className="col-2 col-form-label">
                    First Name
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      id="firstName"
                      className="form-control"
                      placeholder="Doctor's first name"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.onChange}
                      onBlur={this.validateFname}
                      onFocus={this.removeWarnings}
                      required
                    />
                    <span style={{ color: "red" }} id="FNameVr"></span>
                  </div>
                </div>
                <div className="form-group row my-3 justify-content-center">
                  <label htmlFor="lastName" className="col-2 col-form-label">
                    Last Name
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      id="lastName"
                      className="form-control"
                      placeholder="Doctor's last name"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.onChange}
                      onBlur={this.validateLname}
                      onFocus={this.removeWarnings}
                      required
                    />
                    <span style={{ color: "red" }} id="LNameVr"></span>
                  </div>
                </div>
                <div className="form-group row my-3 justify-content-center">
                  <label htmlFor="email" className="col-2 col-form-label">
                    Email
                  </label>
                  <div className="col-5">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="e.g. abc@xyz.com"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      required
                      onFocus={this.removeWarnings}
                      onBlur={this.validateEmail}
                    />
                    <span style={{ color: "red" }} id="emailVr"></span>
                  </div>
                </div>
                <div className="form-group row my-3 justify-content-center">
                  <label htmlFor="dob" className="col-2 col-form-label">
                    Date of Birth
                  </label>
                  <div className="col-5">
                    <input
                      type="date"
                      id="dob"
                      className="form-control"
                      name="dob"
                      value={this.state.dob}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group row my-3 justify-content-center">
                  <label htmlFor="pwd" className="col-2 col-form-label">
                    Password
                  </label>
                  <div className="col-5">
                    <input
                      type="password"
                      id="pwd"
                      className="form-control"
                      placeholder="Enter Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                      onBlur={this.validatePassword}
                      onFocus={this.removeWarnings}
                      required
                    />
                    <span style={{ color: "red" }} id="passwordVr"></span>
                  </div>
                </div>
                <div className="form-group row my-3 justify-content-center">
                  <label className="col-2 col-form-label">Gender</label>
                  <div className="col-5 d-flex justify-content-between">
                    <div>
                      <input
                        type="radio"
                        id="gender"
                        name="gender"
                        value="MALE"
                        onChange={this.onChange}
                      />{" "}
                      Male
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="gender"
                        name="gender"
                        value="FEMALE"
                        onChange={this.onChange}
                      />{" "}
                      Female
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="gender"
                        name="gender"
                        value="OTHER"
                        onChange={this.onChange}
                      />{" "}
                      Other
                    </div>
                  </div>
                </div>
                <div className="form-group row my-3 justify-content-center">
                  <label
                    htmlFor="mobileNumber"
                    className="col-2 col-form-label"
                  >
                    Mobile
                  </label>
                  <div className="col-5">
                    <input
                      type="number"
                      id="mobileNumber"
                      className="form-control"
                      placeholder="Doctor's mobile number"
                      name="mobileNumber"
                      value={this.state.mobileNumber}
                      onChange={this.onChange}
                      pattern="[0-9]{10}"
                      onBlur={this.validateMobileNumber}
                      onFocus={this.removeWarnings}
                      required
                    />
                    <span id="mobileNumberVr" style={{ color: "red" }}></span>
                  </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                  <label htmlFor="area" className="col-2 col-form-label">
                    Area
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      id="area"
                      className="form-control"
                      placeholder="Doctor's Clinic Area"
                      name="area"
                      value={this.state.area}
                      onChange={this.onChange}
                      onBlur={this.validateArea}
                      required
                    />
                    <span id="AreaVr" style={{ color: "red" }}></span>
                  </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                  <label htmlFor="city" className="col-2 col-form-label">
                    City
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      id="city"
                      className="form-control"
                      placeholder="Doctor's city "
                      name="city"
                      value={this.state.city}
                      onChange={this.onChange}
                      onBlur={this.validateCity}
                      required
                    />
                    <span id="CityVr" style={{ color: "red" }}></span>
                  </div>
                </div>

                <div className="form-group row mt-3 justify-content-center">
                  <label htmlFor="state" className="col-2 col-form-label">
                    State
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      id="state"
                      className="form-control"
                      placeholder="Doctor's  State"
                      name="state"
                      value={this.state.state}
                      onChange={this.onChange}
                      onBlur={this.validateState}
                      required
                    />
                    <span id="StateVr" style={{ color: "red" }}></span>
                  </div>
                </div>
                <div className="form-group row mt-3 justify-content-center">
                  <label htmlFor="languages" className="col-2 col-form-label">
                    Languages
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      id="languages"
                      className="form-control"
                      placeholder="Languages known by doctor"
                      name="languages"
                      value={this.state.languages}
                      onChange={this.onChange}
                      onBlur={this.validateLanguages}
                      required
                    />
                    <span id="LangVr" style={{ color: "red" }}></span>
                  </div>
                </div>
                <div className="form-group row mt-3 justify-content-center">
                  <label htmlFor="fees" className="col-2 col-form-label">
                    Consultation Fee
                  </label>
                  <div className="col-5">
                    <input
                      type="number"
                      id="fees"
                      placeholder="Enter consultation fees"
                      min="200"
                      max="1000"
                      step="50"
                      className="form-control"
                      name="fees"
                      value={this.state.fees}
                      onChange={this.onChange}
                      onBlur={this.validateFees}
                      required
                    />
                    <span id="FeesVr" style={{ color: "red" }}></span>
                  </div>
                </div>
                <div className="form-group row mt-3 justify-content-center">
                  <label
                    htmlFor="qualification"
                    className="col-2 col-form-label"
                  >
                    Qualification
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      id="qualification"
                      className="form-control"
                      placeholder="Doctor's qualification"
                      name="qualification"
                      value={this.state.qualification}
                      onChange={this.onChange}
                      onBlur={this.validateQualification}
                      required
                    />
                    <span id="QualVr" style={{ color: "red" }}></span>
                  </div>
                </div>
                <div className="form-group row my-3 justify-content-center">
                  <label className="col-2 col-form-label">Specialization</label>
                  <div className="col-5 d-flex justify-content-between">
                    <select
                      value={this.state.specialization}
                      onChange={this.handleSpecialization}
                      style={{ width: "17vw", height: "7vh" }}
                    >
                      <option value="" disabled>
                        --Select The Type Of Specialist--
                      </option>
                      <option value="General Physician">
                      General Physician
                      </option>
                      <option value="Covid_Consultant">Covid Consultant</option>
                      <option value="General_Surgeon">General Surgeon</option>
                      <option value="Cardiologist">
                        Cardiologist
                      </option>
                      <option value="Orthopedics">Orthopedics</option>
                      <option value="Gynecologist">Gynecologist</option>
                      <option value="Psychiatrist">Psychiatrist</option>
                      <option value="Neurologist">Neurologist</option>
                      <option value="Dentist">Dentist</option>
                      <option value="Ophthalmologist">Ophthalmologist</option>
                      <option value="Physiotherapist">Physiotherapist</option>
                    </select>
                  </div>
                </div>

                <div className="form-group row my-3 justify-content-center">
                  <label htmlFor="firstName" className="col-2 col-form-label">
                    Appointment Link
                  </label>
                  <div className="col-5">
                    <input
                      type="text"
                      id="link"
                      className="form-control"
                      placeholder="Doctor's Appointment Link"
                      name="link"
                      value={this.state.link}
                      onChange={this.onChange}
                      onBlur={this.validateLink}
                      required
                    />
                    <span id="LinkVr" style={{ color: "red" }}></span>
                  </div>
                </div>
                <button
                  className="btn btn-lg btn-primary text-uppercase  mb-5 offset-6"
                  onClick={this.addDoctor}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddNewDoctor;
