import React, { Component } from "react";
import PatientServiceMethods from "../service/PatientServiceMethods";
import swal from "sweetalert";

class UpdatePatientProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      gender: "",
      bloodGroup: "",
      mobileNumber: "",
      area: "",
      city: "",
      state: "",
      message: null,
    };

    this.savePatient = this.savePatient.bind(this);
    this.loadPatient = this.loadPatient.bind(this);
  }

  componentDidMount() {
    this.loadPatient();
  }

  loadPatient() {
    let patient = JSON.parse(sessionStorage.getItem("patient"));
    PatientServiceMethods.getPatientById(patient.userId).then((res) => {
      let patientFull = res.data;
      console.log(patientFull);
      this.setState({
        id: patientFull.id,
        username: patientFull.username,
        firstName: patientFull.firstName,
        lastName: patientFull.lastName,
        email: patientFull.email,
        dob: patientFull.dob,
        gender: patientFull.gender,
        bloodGroup: patientFull.bloodGroup,
        mobileNumber: patientFull.mobileNumber,
        area: patientFull.area,
        city: patientFull.city,
        state: patientFull.state,
      });
    });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleBloodGroupChange = (e) => {
    this.setState({ bloodGroup: e.target.value });
  };

  savePatient = (e) => {
    e.preventDefault();
    let patientFull = {
      id: this.state.id,
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      dob: this.state.dob,
      gender: this.state.gender,
      bloodGroup: this.state.bloodGroup,
      mobileNumber: this.state.mobileNumber,
      area: this.state.area,
      city: this.state.city,
      state: this.state.state,
    };

    PatientServiceMethods.updatePatientDetails(this.state.id, patientFull).then(
      (res) => {
        this.setState({ message: "Patient details updated successfully." });
        console.log(this.state.message);
        //alert(this.state.message);
        swal("Success", this.state.message, "success");
        this.props.history.push("/patientDashboard");
      }
    );
  };

  render() {
    return (
      <>
        <div
          className="container-fluid overflow-hidden patientBack"
          style={{ minHeight: "100vh" }}
        >
          <div className="row my-3">
            <div className="col-sm-8">
              <h2 className="text-dark offset-8">Update Profile</h2>
            </div>
            <div className="col-sm-4">
              <button
                className="btn btn-danger text-uppercase offset-3"
                onClick={() => {
                  this.props.history.push("/patientDashboard");
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
              <div className="form-group row mt-3 justify-content-center">
                <label
                  htmlFor="username"
                  className="col-2 col-form-label fw-bolder"
                >
                  Username
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="username"
                    className="form-control bg-secondary text-light"
                    name="username"
                    readOnly={true}
                    defaultValue={this.state.username}
                  />
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label
                  htmlFor="firstName"
                  className="col-2 col-form-label fw-bolder"
                >
                  First Name
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control bg-secondary text-light"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.onChange}
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label
                  htmlFor="lastName"
                  className="col-2 col-form-label fw-bolder"
                >
                  Last Name
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control bg-secondary text-light"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.onChange}
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label
                  htmlFor="email"
                  className="col-2 col-form-label fw-bolder"
                >
                  Email
                </label>
                <div className="col-5">
                  <input
                    type="email"
                    id="email"
                    className="form-control bg-secondary text-light"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="dob" className="col-2 col-form-label fw-bolder">
                  Date of Birth
                </label>
                <div className="col-5">
                  <input
                    type="date"
                    id="dob"
                    className="form-control bg-secondary text-light"
                    name="dob"
                    value={this.state.dob}
                    onChange={this.onChange}
                    readOnly={true}
                  />
                </div>
              </div>

              <div className="form-group row my-3 justify-content-center visually-hidden">
                <label className="col-2 col-form-label fw-bolder">Gender</label>
                <div className="col-5 d-flex justify-content-between">
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="MALE"
                      onChange={this.onChange}
                      disabled
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
                      disabled
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
                      disabled
                    />{" "}
                    Other
                  </div>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label className="col-2 col-form-label fw-bolder">
                  Blood Group
                </label>
                <div className="col-5 d-flex justify-content-between">
                  <select
                    value={this.state.bloodGroup}
                    onChange={this.handleBloodGroupChange}
                    style={{ width: "3vw", height: "4vh" }}
                    readOnly={true}
                  >
                    <option value="" disabled>
                      --select--
                    </option>
                    <option value="A_POSITIVE">A+</option>
                    <option value="A_NEGATIVE">A-</option>
                    <option value="B_POSITIVE">B+</option>
                    <option value="B_NEGATIVE">B-</option>
                    <option value="O_POSITIVE">O+</option>
                    <option value="O_NEGATIVE">O-</option>
                    <option value="AB_POSITIVE">AB+</option>
                    <option value="AB_NEGATIVE">AB-</option>
                  </select>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label
                  htmlFor="mobileNumber"
                  className="col-2 col-form-label fw-bolder"
                >
                  Mobile
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="mobileNumber"
                    className="form-control"
                    name="mobileNumber"
                    value={this.state.mobileNumber}
                    onChange={this.onChange}
                    pattern="[0-9]{10}"
                  />
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label
                  htmlFor="area"
                  className="col-2 col-form-label fw-bolder"
                >
                  Area
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="area"
                    className="form-control"
                    name="area"
                    value={this.state.area}
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label
                  htmlFor="city"
                  className="col-2 col-form-label fw-bolder"
                >
                  City
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="city"
                    className="form-control"
                    name="city"
                    value={this.state.city}
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label
                  htmlFor="state"
                  className="col-2 col-form-label fw-bolder"
                >
                  State
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="state"
                    className="form-control"
                    name="state"
                    value={this.state.state}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <button
                className="btn btn-lg btn-primary text-uppercase mt-3 mb-5 offset-6"
                onClick={this.savePatient}
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default UpdatePatientProfile;
