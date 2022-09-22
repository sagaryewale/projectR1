import React, { Component } from "react";
import AdminServiceMethods from "../service/AdminServiceMethods";

class DoctorListForAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctors: [],
      message: null,
    };

    this.reloadDoctorList = this.reloadDoctorList.bind(this);
    this.deleteDoctor = this.deleteDoctor.bind(this);
  }

  componentDidMount() {
    this.reloadDoctorList();
  }

  reloadDoctorList() {
    AdminServiceMethods.fetchAllDoctors().then((resp) => {
      this.setState({
        doctors: resp.data,
        message: "Doctor list rendered successfully",
      });
      console.log(this.state.message);
    });
  }

  deleteDoctor = (doctorId) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      AdminServiceMethods.deleteDoctor(doctorId).then((res) => {
        this.setState({ message: "Doctor deleted successfully." });
        console.log(this.state.message, "Doctor ID: ", doctorId);
        this.setState({
          doctors: this.state.doctors.filter(
            (doctor) => doctor.id !== doctorId
          ),
        });
      });
    } else this.props.history.push("#");
  };

  render() {
    return (
      <>
        <div className="container-fluid mt-0 docBack">
          <div className="row  mb-2  ">
            <h2 className="col  fs-3 my-3" style={{ marginLeft: "50px" }}>
              Doctor List
            </h2>
            <div className="col d-flex justify-content-end ">
              <button
                className=" btn btn-danger my-3 "
                onClick={() => {
                  this.props.history.push("/adminDashboard");
                }}
              >
                Go Back
              </button>
            </div>
          </div>

          {this.state.doctors.length === 0 ? (
            <h3 className="text-light text-center">No doctors in database</h3>
          ) : (
            <div>
              <div className="row">
                {this.state.doctors.map((doctor) => (
                  <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
                    <div className="card">
                      <h5 className="card-title bg-success text-center text-light p-2">
                        Dr. {`${doctor.firstName + " " + doctor.lastName}`}
                      </h5>
                      <div className="card-body text-center">
                        <p className="card-text visually-hidden">{doctor.id}</p>
                        <p className="card-text">
                          Qualification : {doctor.qualification}
                        </p>
                        <p className="card-text">
                          Specialization : {doctor.specialization}
                        </p>
                        <p className="card-text ">City : {doctor.city}</p>
                        <p className="card-text ">
                          Consultation fees : &#8377; {doctor.fees}{" "}
                        </p>
                        <p className="card-text">Email ID: {doctor.email}</p>
                        <p className="card-text ">
                          Mobile Number : {doctor.mobileNumber}
                        </p>
                        <p className="card-text ">
                          Appointment Link : {doctor.link}
                        </p>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            this.deleteDoctor(doctor.id);
                          }}
                        >
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

export default DoctorListForAdmin;
