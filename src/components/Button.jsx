import React, { useState } from "react";
import axios from "axios";

function Button({ id, setChoose, register, detail, setDetail }) {
  const [book, setBook] = useState(false);
  let load = async (id) => {
    if (detail.pick !== "" && detail.drop !== "") {
      setBook(true);
      setDetail({ ...detail, id: id });
      await axios
        .put("https://bike-rental-7ul5.onrender.com/api/users/bike", {
          id: id,
          username: register.username,
          detail: detail,
        })
        .then(() => {
          setChoose(1);
          setBook(false);
        });
    } else {
      alert("Please select pick up drop off date");
    }
  };
  return (
    <div>
      {book ? (
        <div>
          <div className="d-block mb-2">
            <label
              className="d-inline form-label text-black me-2"
              htmlFor="form3Example3"
            >
              pick up :
            </label>
            <input
              className="d-inline"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              required
              onChange={(e) => {
                setDetail({
                  ...detail,
                  pick: e.target.value,
                });
              }}
            ></input>
          </div>
          <div className="d-block">
            <label
              className="d-inline form-label text-black me-2"
              htmlFor="form3Example3"
            >
              drop off :
            </label>
            <input
              type="date"
              className="d-inline"
              min={new Date().toISOString().split("T")[0]}
              required
              onChange={(e) => {
                setDetail({
                  ...detail,
                  drop: e.target.value,
                });
              }}
            ></input>
          </div>
          <a
            to="/Booking"
            onClick={() => load(id)}
            className="btn btn-outline-dark mt-3"
          >
            Book Now
          </a>
        </div>
      ) : (
        <a
          to="/Booking"
          onClick={() => setBook(true)}
          className="btn btn-outline-dark mt-3"
        >
          Book Now
        </a>
      )}
    </div>
  );
}

export default Button;
