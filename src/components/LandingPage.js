import React from "react";
import "./LandingPage.css";
import { NavLink } from "react-router-dom";
import { Carousel, CarouselItem } from "react-bootstrap";

// const toLogin = () => {
//     return <Link to="/userLogin">Login</Link>
// }

const LandingPage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-10">
            <Carousel>
              <CarouselItem className="docBack">
                <div
                  className=" row justify-content-center "
                  style={{ height: "100vh" }}
                >
                  <div className="wrapper col-8 d-flex flex-column justify-content-center align-items-center ">
                    <div className="display-6">Welcome to E-Health Care</div>
                    <div className="text-muted">
                      Login or Register if you dont have an account
                    </div>

                    <NavLink
                      className="btn btn-link btn-lg btn-dark   w-25  text-light   text-uppercase text-decoration-none  main-div my-3"
                      id="Login"
                      to="/userLogin"
                    >
                      Login
                    </NavLink>
                    <NavLink
                      className="btn   btn-link btn-lg btn-dark w-25  text-light  text-uppercase text-decoration-none  main-div  rounded-4 "
                      id="SignUp"
                      to="/patient-sign-up"
                    >
                      Register
                    </NavLink>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="patientBack">
                <div
                  className=" row justify-content-center "
                  style={{ height: "100vh" }}
                >
                  <div className="wrapper col-8 d-flex flex-column justify-content-center align-items-center ">
                    <div
                      className=" d-flex flex-column justify-content-center align-items-center shadow p-4 rounded"
                      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                    >
                      <div className="display-6 text-light">
                        Welcome to E-Health Care
                      </div>
                      <div className="text-light">
                        Login or Register if you dont have an account
                      </div>

                      <NavLink
                        className="btn btn-link btn-lg btn-light w-25  text-dark  text-uppercase text-decoration-none  main-div my-3 p-2"
                        id="Login"
                        to="/userLogin"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        className="btn  btn-link btn-lg btn-light w-25  text-dark  text-uppercase text-decoration-none  main-div  p-2"
                        id="SignUp"
                        to="/patient-sign-up"
                      >
                        Register
                      </NavLink>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
