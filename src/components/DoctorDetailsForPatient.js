import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AppointmentService from "../service/AppointmentService";

class DoctorDetailsForPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor: [],
      message: "",
    };

    this.getDoctor = this.getDoctor.bind(this);
  }

  componentDidMount() {
    this.getDoctor();
  }

  getDoctor = () => {
    console.log("Hello");
    console.log(this.props.location.state.appointmentId);
    AppointmentService.getDoctorByAppointmentId(
      this.props.location.state.appointmentId
    )
      .then((response) => {
        console.log(response.data);
        this.setState({
          doctor: response.data,
          message: "Doctor retrieved successfully",
        });
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        alert(error.response.data.message);
      });
  };

  render() {
    let { doctor } = this.state;
    return (
      <>
        <div className="container-fluid  docBack">
          <button
            className="btn btn-danger my-3 offset-10"
            onClick={() => {
              this.props.history.push("/patientDashboard");
            }}
          >
            Go Back
          </button>

          <div className="row justify-content-center ">
            <div className="col-8">
              <div
                className="card  border rounded-3    shadow "
                style={{ height: "60vh" }}
              >
                <h3
                  className="fw-bold  text-light header"
                  style={{ "text-align": "center" }}
                >
                  Doctor Details
                </h3>
                <div className="card-body offset-1">
                  <table className="table table-borderless  ">
                    <tbody>
                      <tr>
                        <th> FirstName :</th>
                        <td> {doctor.firstName}</td>
                      </tr>
                      <tr>
                        <th> LastName :</th>
                        <td> {doctor.lastName}</td>
                      </tr>
                      <tr>
                        <th> Mobile No : </th>
                        <td>{doctor.mobileNumber}</td>
                      </tr>
                      <tr>
                        <th> Email :</th>
                        <td> {doctor.email}</td>
                      </tr>
                      <tr>
                        <th> State :</th>
                        <td> {doctor.state}</td>
                      </tr>
                      <tr>
                        <th> Area :</th>
                        <td> {doctor.area}</td>
                      </tr>
                      <tr>
                        <th> City :</th>
                        <td> {doctor.city}</td>
                      </tr>

                      <tr>
                        <th> Appointment Link :</th>
                        <td style={{ maxWidth: "40vh" }}> {doctor.link} </td>
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

export default DoctorDetailsForPatient;
