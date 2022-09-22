import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdminServiceMethods from "../service/AdminServiceMethods";

class AdminDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminId: "",
      firstName: "",
    };

    this.loadAdmin = this.loadAdmin.bind(this);
  }

  componentDidMount() {
    this.loadAdmin();
  }

  loadAdmin = () => {
    let admin = JSON.parse(sessionStorage.getItem("admin"));
    this.setState({
      adminId: admin.userId,
      firstName: admin.userFirstName,
    });
  };

  logout() {
    AdminServiceMethods.logoutAdmin();
  }

  render() {
    let { adminId, firstName } = this.state;
    return (
      <>
        <div className="container-fluid adminBack">
          <div className="row">
            <div className="col-sm-6 d-flex ">
              <h2 className="fs-4 ms-5 my-3 text-light ">Hello, {firstName}</h2>
            </div>
            <div className="col-sm-6 ">
              <NavLink
                onClick={this.logout}
                className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none my-3 "
                to="/"
              >
                Logout
              </NavLink>
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-sm-4 ">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Add New Doctor</h5>
                  <p className="card-text">
                    Register a new doctor to database.
                  </p>
                  <button
                    onClick={() => {
                      this.props.history.push("/add-new-doctor");
                    }}
                    className="btn btn-primary w-50"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">View Doctor List</h5>
                  <p className="card-text">
                    View details of all registered doctors.
                  </p>
                  <button
                    onClick={() => {
                      this.props.history.push("/doctor-list-admin");
                    }}
                    className="btn btn-success w-50"
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>

            {/* <div className="row my-3"> */}
            <div className="col-sm-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">View Patient List</h5>
                  <p className="card-text">View details of all patients.</p>
                  <button
                    onClick={() => {
                      this.props.history.push("/patientList");
                    }}
                    className="btn btn-warning w-50"
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default AdminDashboard;
