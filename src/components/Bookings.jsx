import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import "../styles/Bookings.css";
import "../styles/loading.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function NoBooking() {
  return (
    <div className="col-12 d-flex justify-content-center">
      <h2>No Bookings</h2>
    </div>
  );
}

function Bookings() {
  const { register, setRegister } = useContext(userContext);
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    setLoading(true);
    let user = sessionStorage.getItem("loggedInUser");
    if (!user) {
      history("/Signin");
      return;
    }
    let loggedUser = JSON.parse(user);
    setRegister(loggedUser);
    load();
  }, []);
  let load = async () => {
    let res = await axios.get(
      `https://bike-rental-7ul5.onrender.com/api/bookings/${register.username}`
    );
    setValue(res.data.details);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p className="paragraph">Please wait...</p>
        </div>
      ) : (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid px-5">
              <a className="navbar-brand" href="#!">
                {register.name}'s Bookings
              </a>
              <form className="d-flex">
                <Link to="/Home" className="btn btn-outline-dark me-2">
                  Home
                  <span className="badge bg-dark text-white ms-1 rounded-pill"></span>
                </Link>
                <Link
                  to="/Signin"
                  onClick={() => {
                    sessionStorage.clear();
                    setRegister({
                      token: "",
                      username: "",
                      name: "",
                      mobile: "",
                      address: "",
                      password: "",
                    });
                  }}
                  className="btn btn-outline-dark me-2"
                >
                  Logout
                  <span className="badge bg-dark text-white ms-1 rounded-pill"></span>
                </Link>
              </form>
            </div>
          </nav>
          <div className="container-fluid mt-0 mb-0 ms-0 me-0 body">
            {value.length > 0 ? (
              value.map((item) => {
                return (
                  <div className="row" key={Math.random() * 10}>
                    <div className="col-3 d-flex justify-content-start">
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "fill",
                        }}
                        src={item.bikedetail.image}
                      ></img>
                    </div>
                    <div className="col-3 d-flex justify-content-start">
                      <div>
                        <h4 className="ms-2 mt-4">
                          {item.bikedetail.modelName}
                        </h4>
                        <p className="ms-2 mt-2">
                          {item.bikedetail.details.brand}
                        </p>
                        <p className="ms-2 mt-2">
                          <i
                            className="fa-solid fa-location-dot me-2"
                            style={{ color: "black" }}
                          ></i>
                          {item.bikedetail.location}
                        </p>
                      </div>
                    </div>
                    <div className="col-3 d-flex justify-content-start">
                      <div>
                        <p className="ms-2 mt-4">Booked At : {item.bookedAt}</p>
                        <p className="ms-2 mt-2">Pick Up date : {item.pick}</p>
                        <p className="ms-2 mt-2">Drop date : {item.drop}</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <p className="d-flex justify-content-end pe-4 mt-4">
                        Price : Rs.{item.bikedetail.price[1]}/day
                      </p>
                      <div className="d-flex justify-content-end pe-4 mt-4"></div>
                    </div>
                    <hr className="mt-3"></hr>
                  </div>
                );
              })
            ) : (
              <NoBooking />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookings;
