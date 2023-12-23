import React, { useContext, useState } from "react";
import "../styles/Signinpage.css";
import { userContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Forget() {
  const { register, setRegister } = useContext(userContext);
  const history = useNavigate();
  return (
    <div>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-5 fw-bold ls-tight text-light">
                Trip At Rent
              </h1>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      console.log(register);
                      axios.patch(
                        `https://bike-rental-7ul5.onrender.com/api/users/forget`,
                        {
                          username: register.username,
                        }
                      );
                      setRegister({
                        token: "",
                        username: register.username,
                        name: "",
                        mobile: "",
                        address: "",
                        password: "",
                      });
                      alert("Check your mail and reset the password");
                      history("/Reset");
                    }}
                  >
                    <div className="row">
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control"
                          value={register.username}
                          required
                          onChange={(e) => {
                            setRegister({
                              ...register,
                              username: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Send OTP
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Forget;
