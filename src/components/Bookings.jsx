import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../App";
import "../styles/Bookings.css";
import axios from "axios";

function Bookings() {
  const { register, setRegister } = useContext(userContext);
  const [value, setValue] = useState([]);
  useEffect(() => {
    let user = sessionStorage.getItem("loggedInUser");
    let loggedUser = JSON.parse(user);
    setRegister(loggedUser);
  }, []);
  axios
    .get("https://bike-rental-7ul5.onrender.com/api/users/profile", {
      headers: { Authorization: register.token },
    })
    .then((res) => {
      setValue(res.data.bookings);
    });
  return (
    <div className="container-fluid mt-0 mb-0 ms-0 me-0 body">
      {value.map((item) => {
        return (
          <div className="row" key={Math.random() * 10}>
            <div className="col-3 d-flex justify-content-start">
              <img
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                src={item.image}
              ></img>
            </div>
            <div className="col-4 d-flex justify-content-start">
              <div>
                <h4 className="ms-2 mt-4">{item.modelName}</h4>
                <p className="ms-2 mt-2">{item.details.brand}</p>
              </div>
            </div>
            <div className="col-5">
              <p className="d-flex justify-content-end pe-4 mt-4">
                Price : Rs.{item.price[1]}/day
              </p>
              <div className="d-flex justify-content-end pe-4 mt-4"></div>
            </div>
            <hr className="mt-3"></hr>
          </div>
        );
      })}
    </div>
  );
}

export default Bookings;
