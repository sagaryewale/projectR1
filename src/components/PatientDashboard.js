import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PatientServiceMethods from "../service/PatientServiceMethods";

class PatientDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patientId: "",
      firstName: "",
    };

    this.loadPatient = this.loadPatient.bind(this);
    this.updatePatient = this.updatePatient.bind(this);
  }

  componentDidMount() {
    this.loadPatient();
  }

  loadPatient = () => {
    let patient = JSON.parse(sessionStorage.getItem("patient"));
    this.setState({
      patientId: patient.userId,
      firstName: patient.userFirstName,
    });
  };

  updatePatient = (id) => {
    this.props.history.push("/update-profile");
  };

  logoutPatient = () => PatientServiceMethods.logoutPatient();

  render() {
    let { patientId, firstName } = this.state;

    return (
      <>
        <div className="container-fluid patientBack">
          <div className="row justify-content-center  ">
            <div className="col-8">
              <div className="row">
                <div className="col-sm-6">
                  <h2 className="text-capitalize   mt-2 mb-5 offset-1">
                    Hello, {firstName}
                  </h2>
                </div>
                <div className="col-sm-6">
                  <NavLink
                    onClick={this.logoutPatient}
                    className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none mt-2 mb-5"
                    to="/"
                  >
                    Logout
                  </NavLink>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 ">
                  <div className="card shadow2 border border-danger rounded mx-4 mb-4">
                    <div
                      className="card-body text-center mt-5"
                      style={{ minHeight: "20vh" }}
                    >
                      <h5 className="card-title fs-3 fw-bold">
                        Book Appointment
                      </h5>
                      <p className="card-text text-muted">
                        Book appointments with best doctors in city.
                      </p>
                      <button
                        onClick={() => {
                          this.props.history.push(
                            "/specialization-list-by-city"
                          );
                        }}
                        className="btn btn-outline-primary w-25"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="card border border-danger rounded mx-4 mb-4 shadow">
                    <div
                      className="card-body text-center mt-5"
                      style={{ minHeight: "20vh" }}
                    >
                      <h5 className="card-title fs-3 fw-bold">
                        Show Current Appointment
                      </h5>
                      <p className="card-text text-muted">
                        View your current appointment.
                      </p>
                      <button
                        onClick={() => {
                          this.props.history.push("/current-app");
                        }}
                        className="btn btn-outline-primary w-25"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-3">
                <div className="col-sm-12 col-md-6">
                  <div className="card border border-danger rounded mx-4 mb-4 shadow">
                    <div
                      className="card-body text-center mt-5 "
                      style={{ minHeight: "20vh" }}
                    >
                      <h5 className="card-title fs-3 fw-bold">
                        View Appointment History
                      </h5>
                      <p className="card-text text-muted">
                        Click to view your till date appointment history.
                      </p>
                      <button
                        onClick={() => {
                          this.props.history.push("/app-history");
                        }}
                        className="btn btn-outline-primary w-25"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="card border border-danger rounded mx-4 shadow">
                    <div
                      className="card-body text-center mt-5"
                      style={{ minHeight: "20vh" }}
                    >
                      <h5 className="card-title fs-3 fw-bold">
                        Update Profile
                      </h5>
                      <p className="card-text text-muted">
                        Edit your account details.
                      </p>
                      <button
                        className="btn btn-outline-danger w-25"
                        onClick={() => {
                          this.updatePatient(this.state.patientId);
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PatientDashboard;
