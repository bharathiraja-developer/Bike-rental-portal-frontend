import React, { useContext, useState } from "react";
import { userContext } from "../App";
import "../styles/Signinpage.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Reset() {
  const { register, setRegister } = useContext(userContext);
  const [newpas, setNewpas] = useState("");
  const [repas, setRepas] = useState("");
  const [otp, setOtp] = useState("");
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
                      if (newpas === repas) {
                        axios
                          .patch(
                            `https://bike-rental-7ul5.onrender.com/api/users/reset`,
                            {
                              username: register.username,
                              code: otp,
                              password: newpas,
                            }
                          )
                          .then((res) => {
                            if (res.data.message === "wrong code") {
                              window.alert("Please Enter correct OTP");
                            } else {
                              history("/ResetSucess");
                            }
                          });
                        setRegister({
                          token: "",
                          username: register.username,
                          name: "",
                          mobile: "",
                          address: "",
                          password: "",
                        });
                        setNewpas("");
                        setRepas("");
                      } else {
                        window.alert("Both Password must be same");
                      }
                    }}
                  >
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example2">
                        OTP :
                      </label>
                      <input
                        type="text"
                        id="form3Example2"
                        autoComplete="otp"
                        className="form-control"
                        value={otp}
                        required
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        New Password
                      </label>
                      <input
                        type="password"
                        id="form3Example3"
                        autoComplete="new-password"
                        className="form-control"
                        value={newpas}
                        required
                        onChange={(e) => {
                          setNewpas(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4">
                        Re-type Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        autoComplete="new-password"
                        className="form-control"
                        value={repas}
                        required
                        onChange={(e) => {
                          setRepas(e.target.value);
                        }}
                      />
                    </div>

                    <button className="btn btn-primary btn-block mb-4">
                      submit
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

export default Reset;
