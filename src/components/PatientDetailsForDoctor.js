import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AppointmentService from "../service/AppointmentService";

class PatientDetailsForDoctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: [],
      message: "",
    };

    this.getPatient = this.getPatient.bind(this);
  }

  componentDidMount() {
    this.getPatient();
  }

  getPatient = () => {
    console.log(this.props.location.state.appointmentId);
    AppointmentService.getPatientByAppointmentId(
      this.props.location.state.appointmentId
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          patient: response.data,
          message: "Patient retrieved successfully",
        });
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        alert(error.response.data.message);
      });
  };

  render() {
    let { patient } = this.state;
    return (
      <>
        <div className="container-fluid patientBack">
          <button
            className="btn btn-danger my-3 offset-10"
            onClick={() => {
              this.props.history.push("/doctorDashboard");
            }}
          >
            Go Back
          </button>
          <div className="row justify-content-center align-items center mt-5">
            <div className="col-8">
              <div
                className="card border border-dark  rounded-3 shadow"
                style={{ height: "50vh" }}
              >
                <h3
                  className="fw-bold header text-light"
                  style={{ "text-align": "center" }}
                >
                  Patient Details
                </h3>
                <div className="card-body">
                  <table className="table table-borderless offset-1 ">
                    <tbody>
                      <tr>
                        <th> FirstName :</th>
                        <td> {patient.firstName}</td>
                      </tr>
                      <tr>
                        <th> LastName :</th>
                        <td> {patient.lastName}</td>
                      </tr>
                      <tr>
                        <th> Mobile No : </th>
                        <td>{patient.mobileNumber}</td>
                      </tr>
                      <tr>
                        <th> Email :</th>
                        <td> {patient.email}</td>
                      </tr>
                      <tr>
                        <th> State :</th>
                        <td> {patient.state}</td>
                      </tr>
                      <tr>
                        <th> Area :</th>
                        <td> {patient.area}</td>
                      </tr>
                      <tr>
                        <th> City :</th>
                        <td> {patient.city}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PatientDetailsForDoctor;
