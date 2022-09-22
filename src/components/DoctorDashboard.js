import React, { Component } from "react";
import DoctorServiceMethods from "../service/DoctorServiceMethods";
import { NavLink } from "react-router-dom";

class DoctorDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctorId: "",
      firstName: "",
    };

    this.loadDoctor = this.loadDoctor.bind(this);
  }

  componentDidMount() {
    this.loadDoctor();
  }

  logout = () => DoctorServiceMethods.doctorLogout();

  loadDoctor = () => {
    let doctor = JSON.parse(sessionStorage.getItem("doctor"));
    this.setState({
      doctorId: doctor.userId,
      firstName: doctor.userFirstName,
    });
  };

  deleteHandler(id) {}

  render() {
    let doctor = JSON.parse(sessionStorage.getItem("doctor"));
    let { doctorId, firstName } = this.state;
    return (
      <>
        <div className="container-fluid docBack ">
          <div className="row justify-content-center">
            <div className="col-8">
              <br />
              <div className="row ">
                <div className="col-sm-6">
                  <h2 className="text-capitalize fw-bold text-danger">
                    Welcome, Dr. {firstName}
                  </h2>
                </div>
                <div className="col-sm-6">
                  <NavLink
                    onClick={this.logout}
                    className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none "
                    to="/userLogin"
                  >
                    Logout
                  </NavLink>
                </div>
              </div>

              <br />

              <div className="row  justify-content-center mb-3 text-center">
                <div className="col-12  ">
                  <div className="card border border-danger">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Update Profile</h5>
                      <p className="card-text text-muted">
                        Update your account details.
                      </p>
                      <button
                        onClick={() => {
                          this.props.history.push("/update-doctor-profile");
                        }}
                        className="btn btn-danger w-25"
                      >
                        UPDATE
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row text-center  ">
                <div className="col-sm-6">
                  <div className="card border border-danger">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        Active Appointments
                      </h5>
                      <p className="card-text text-muted">
                        View all your active appointments at present.
                      </p>
                      <button
                        onClick={() => {
                          this.props.history.push("/doctor-current-app");
                        }}
                        className="btn btn-primary w-25"
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border border-danger">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        Appointment History
                      </h5>
                      <p className="card-text text-muted">
                        View your appointment history.
                      </p>
                      <button
                        onClick={() => {
                          this.props.history.push("/doctor-app-history");
                        }}
                        className="btn btn-info w-25"
                      >
                        VIEW
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-3 text-center">
                <div className="col-sm-6">
                  <div className="card border border-danger">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Create Slots</h5>
                      <p className="card-text text-muted">
                        Fill a form to create your slot time-table.
                      </p>
                      <button
                        onClick={() => {
                          this.props.history.push("/create-appointment-slots");
                        }}
                        className="btn btn-success w-25"
                      >
                        CREATE
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card border border-danger">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">Show Todays Slots</h5>
                      <p className="card-text text-muted">
                        Display all slots available for today
                      </p>
                      <button
                        onClick={() => {
                          this.props.history.push({
                            pathname: "/show-appointment-slots-doctor",
                            state: { doctorId: doctor.userId },
                          });
                        }}
                        className="btn btn-warning w-25"
                      >
                        VIEW
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

export default DoctorDashboard;
