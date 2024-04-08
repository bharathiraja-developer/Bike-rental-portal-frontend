import React, { useContext, useState } from "react";
import "../styles/Signinpage.css";
import "../styles/loading.css";
import { userContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SigninPage() {
  const { register, setRegister } = useContext(userContext);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p className="paragraph">Please wait...</p>
        </div>
      ) : (
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
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setLoading(true);
                        await axios
                          .post(
                            "https://bike-rental-7ul5.onrender.com/api/users/signin",
                            {
                              username: register.username,
                              password: register.password,
                            }
                          )
                          .then((res) => {
                            sessionStorage.setItem(
                              "loggedInUser",
                              JSON.stringify(res.data)
                            );
                            setRegister({
                              token: res.data.token,
                              username: res.data.username,
                              name: res.data.name,
                              mobile: "",
                              address: "",
                              password: "",
                            });
                            setLoading(false);
                            history("/Home");
                          })
                          .catch((error) => {
                            setLoading(false);
                            alert("Please enter correct username and password");
                          });
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
                            autoComplete="username"
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

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4"
                          autoComplete="current-password"
                          className="form-control"
                          value={register.password}
                          required
                          onChange={(e) => {
                            setRegister({
                              ...register,
                              password: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Sign in
                      </button>
                    </form>

                    <div className="text-center">
                      <p>Don't have an accont ?</p>
                      <Link to="/" className="btn btn-primary btn-block mb-4">
                        Sign up
                      </Link>
                    </div>
                    <div className="text-center">
                      <p>Are you forgot your password ?</p>
                      <Link
                        to="/Forget"
                        type="submit"
                        className="btn btn-primary btn-block mb-4"
                      >
                        Forgot password
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default SigninPage;
