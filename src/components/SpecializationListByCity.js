import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AppointmentService from "../service/AppointmentService";

class SpecializationListByCity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specializations: [],
      city: "",
      message: null,
    };

    this.search = this.search.bind(this);
    this.searchFirst = this.searchFirst.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.searchFirst();
  }

  searchFirst() {
    AppointmentService.getSpecializationListByCity(this.state.city).then(
      (response) => {
        console.log(this.state.city);
        this.setState({ specializations: response.data });
        console.log(this.state.specializations);
      }
    );
  }

  search = (e) => {
    e.preventDefault();

    AppointmentService.getSpecializationListByCity(this.state.city).then(
      (response) => {
        console.log(this.state.city);
        this.setState({ specializations: response.data });
        console.log(this.state.specializations);
      }
    );
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <>
        <div className="container-fluid overflow-hidden ">
          <div className="offset-9 mt-3">
            <button
              className="btn btn-danger text-uppercase offset-4"
              onClick={() => {
                this.props.history.push("./patientDashboard");
              }}
            >
              Go Back
            </button>
          </div>
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row" style={{ minHeight: "70vh" }}>
                <div
                  className="col-6 d-flex justify-content-center align-items-center "
                  style={{ borderRight: "5px solid grey", borderWidth: "thin" }}
                >
                  <div className="row">
                    <div className="col bg-success text-light  p-4 rounded text-center shadow ">
                      <div className="row my-3 ">
                        <div className="col">
                          <h4 className="fw-bold  ">
                            Select Specialist by City
                          </h4>
                        </div>
                      </div>
                      <form>
                        <div className="form-group row mt-3 justify-content-center">
                          <label
                            htmlFor="city"
                            className="col-3 col-form-label fs-5 "
                            style={{ fontWeight: "bold" }}
                          >
                            City:
                          </label>
                          <div className="col-9">
                            <input
                              type="text"
                              id="city"
                              className="form-control fs-4"
                              name="city"
                              value={this.state.city}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                        <button
                          className="btn btn-dark mt-3 "
                          onClick={this.search}
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  {this.state.specializations.length === 0 ? (
                    <h3 className="text-center">
                      We will be in your city soon
                    </h3>
                  ) : (
                    <table className="table my-3">
                      <tbody>
                        {this.state.specializations.map(
                          (specialization, index) => (
                            <tr key={index}>
                              <td>
                                <ul>
                                  <li>
                                    <NavLink
                                      className="btn btn-lg w-50 btn-success w-100 text-decoration-none"
                                      to={{
                                        pathname: "/doctor-list-patient",
                                        state: {
                                          city: this.state.city,
                                          specialization: specialization,
                                        },
                                      }}
                                    >
                                      {specialization}
                                    </NavLink>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SpecializationListByCity;
