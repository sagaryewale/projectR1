import React, { Component } from "react";
import swal from "sweetalert";
import AdminServiceMethods from "../service/AdminServiceMethods";

class PatientList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patients: [],
      message: null,
    };

    this.reloadPatientList = this.reloadPatientList.bind(this);
    this.deletePatient = this.deletePatient.bind(this);
  }

  componentDidMount() {
    this.reloadPatientList();
  }

  reloadPatientList() {
    AdminServiceMethods.fetchAllPatients().then((resp) => {
      this.setState({
        patients: resp.data,
        message: "Patient list rendered successfully",
      });
      console.log(this.state.message);
    });
  }

  deletePatient = (patientId) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      AdminServiceMethods.deletePatient(patientId).then((res) => {
        this.setState({ message: "Patient deleted successfully." });
        console.log(this.state.message, "Patient ID: ", patientId);
        this.setState({
          patients: this.state.patients.filter(
            (patient) => patient.id !== patientId
          ),
        });
      });
    } else this.props.history.push("#");

    // swal({
    //     title: "Are you sure?",
    //     text: "Once deleted, you will not be able to recover this imaginary file!",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    //   })
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       swal("Poof! Your imaginary file has been deleted!", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("Your imaginary file is safe!");
    //     }
    //   });
  };

  render() {
    return (
      <>
        <div className="container-fluid my-4  mt-0 patientBack">
          <div className="row justify-between mb-2 ">
            <h2
              className="col  fs-3 my-3 text-light"
              style={{ marginLeft: "100px" }}
            >
              Patient List
            </h2>
            <div className="col d-flex justify-content-end ">
              <button
                className=" btn btn-danger my-3"
                onClick={() => {
                  this.props.history.push("/adminDashboard");
                }}
              >
                Go Back
              </button>
            </div>
          </div>
          {this.state.patients.length === 0 ? (
            <h3 className="text-light text-center mt-5">
              No patients in database
            </h3>
          ) : (
            <div>
              <div className="row">
                {this.state.patients.map((patient) => (
                  <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="card">
                      <h5 className="card-title bg-success text-center text-light p-2">{`${
                        patient.firstName + " " + patient.lastName
                      }`}</h5>
                      <div className="card-body text-center">
                        <p className="card-text visually-hidden">
                          {patient.id}
                        </p>
                        <p className="card-text">DOB : {patient.dob}</p>
                        <p className="card-text ">City : {patient.city}</p>
                        <p className="card-text ">Gender : {patient.gender} </p>
                        <p className="card-text">
                          BloodGroup : {patient.bloodGroup}
                        </p>
                        <p className="card-text ">Email : {patient.email}</p>
                        <p className="card-text ">
                          MobileNumber : {patient.mobileNumber}
                        </p>

                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.deletePatient(patient.id);
                          }}
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default PatientList;
