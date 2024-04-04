import React, { useContext } from "react";
import { datas } from "./Home";
import { Link } from "react-router-dom";
import axios from "axios";
import { userContext } from "../App";

function Bike() {
  const { register, setRegister } = useContext(userContext);
  const { data, filterData, detail, setDetail, choose, setChoose } =
    useContext(datas);
  if (choose == 1) {
    return (
      <div>
        <section>
          <div className="rt-container">
            <div className="col-rt-12">
              <div className="Scriptcontent">
                <div id="card" className="animated fadeIn">
                  <div id="upper-side">
                    <svg
                      version="1.1"
                      id="checkmark"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M131.583,92.152l-0.026-0.041c-0.713-1.118-2.197-1.447-3.316-0.734l-31.782,20.257l-4.74-12.65
	c-0.483-1.29-1.882-1.958-3.124-1.493l-0.045,0.017c-1.242,0.465-1.857,1.888-1.374,3.178l5.763,15.382
	c0.131,0.351,0.334,0.65,0.579,0.898c0.028,0.029,0.06,0.052,0.089,0.08c0.08,0.073,0.159,0.147,0.246,0.209
	c0.071,0.051,0.147,0.091,0.222,0.133c0.058,0.033,0.115,0.069,0.175,0.097c0.081,0.037,0.165,0.063,0.249,0.091
	c0.065,0.022,0.128,0.047,0.195,0.063c0.079,0.019,0.159,0.026,0.239,0.037c0.074,0.01,0.147,0.024,0.221,0.027
	c0.097,0.004,0.194-0.006,0.292-0.014c0.055-0.005,0.109-0.003,0.163-0.012c0.323-0.048,0.641-0.16,0.933-0.346l34.305-21.865
	C131.967,94.755,132.296,93.271,131.583,92.152z"
                      />
                      <circle
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="5"
                        strokeMiterlimit="10"
                        cx="109.486"
                        cy="104.353"
                        r="32.53"
                      />
                    </svg>
                    <h3 id="status">Success</h3>
                  </div>
                  <div id="lower-side">
                    <p id="message">Congratulations, Bike Booked sucessfully</p>
                    <p>The bike owner will contact you shortly</p>
                    <Link
                      onClick={(e) => {
                        setChoose(0);
                      }}
                      to="/Home"
                      id="contBtn"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  if (filterData.length == 0) {
    return (
      <section className="py-5">
        <div className="container-fluid px-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
            {data.map((bike) => {
              return (
                <div className="col mb-5" key={bike._id}>
                  <div className="card h-100">
                    <img
                      className="card-img-top"
                      style={{ height: "60%", objectFit: "fill" }}
                      src={bike.image}
                      alt="..."
                    />

                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{bike.modelName}</h5>
                        <p className="fs-3">
                          Rs.{bike.price[1]}
                          <span className="fs-6">/day</span>
                        </p>
                        <p className="border border-success-subtle rounded-pill w-50 mx-auto text-success">
                          <i
                            className="fa-regular fa-money-bill-1 me-1"
                            style={{ color: "#65cd9c" }}
                          ></i>
                          pay at pickup location
                        </p>
                        <p>
                          Dealer Timing :{" "}
                          <span className="text-danger">9:00 AM</span> to{" "}
                          <span className="text-danger">9:00 PM</span>
                        </p>
                        <table className="mx-auto w-100 table table-bordered border-secondary-subtle">
                          <tbody>
                            <tr>
                              <td className="w-50 text-black mx-auto my-auto fs-6 border-start-0">
                                <i className="fa-solid fa-location-dot me-2"></i>
                                {bike.location}
                              </td>
                              <td className="border-end-0">
                                <p className="text-black mx-auto my-auto fs-6">
                                  Deposit : Rs.1000
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td className="w-50 text-black mx-auto my-auto fs-6 border-start-0">
                                <i className="fa-regular fa-calendar-days me-2"></i>
                                {bike.details.year}
                              </td>
                              <td className="border-start-0 border-end-0">
                                <p className="text-black mx-auto my-auto fs-6">
                                  cc: {bike.details.cc}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                            <a
                              to="/Booking"
                              onClick={async (e) => {
                                setDetail({ ...detail, id: bike._id });
                                console.log(bike._id, register.username);
                                await axios
                                  .put(
                                    "https://bike-rental-7ul5.onrender.com/api/users/bike",
                                    {
                                      id: bike._id,
                                      username: register.username,
                                    }
                                  )
                                  .then(() => {
                                    setChoose(1);
                                  });
                              }}
                              className="btn btn-outline-dark mt-3"
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-5">
      <div className="container-fluid px-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center">
          {filterData.map((bike) => {
            return (
              <div className="col mb-5" key={bike._id}>
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    style={{ height: "60%", objectFit: "fill" }}
                    src={bike.image}
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{bike.modelName}</h5>
                      <p className="fs-3">
                        Rs.{bike.price[1]}
                        <span className="fs-6">/day</span>
                      </p>
                      <p className="border border-success-subtle rounded-pill w-50 mx-auto text-success">
                        <i
                          className="fa-regular fa-money-bill-1 me-1"
                          style={{ color: "#65cd9c" }}
                        ></i>
                        pay at pickup location
                      </p>
                      <p>
                        Dealer Timing :{" "}
                        <span className="text-danger">9:00 AM</span> to{" "}
                        <span className="text-danger">9:00 PM</span>
                      </p>
                      <table className="mx-auto w-100 table table-bordered border-secondary-subtle">
                        <tbody>
                          <tr>
                            <td className="w-50 text-black mx-auto my-auto fs-6 border-start-0">
                              <i className="fa-solid fa-location-dot me-2"></i>
                              {bike.location}
                            </td>
                            <td className="border-end-0">
                              <p className="text-black mx-auto my-auto fs-6">
                                Deposit : Rs.1000
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="w-50 text-black mx-auto my-auto fs-6 border-start-0">
                              <i className="fa-regular fa-calendar-days me-2"></i>
                              {bike.details.year}
                            </td>
                            <td className="border-start-0 border-end-0">
                              <p className="text-black mx-auto my-auto fs-6">
                                cc: {bike.details.cc}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                          <a
                            to="/Booking"
                            onClick={async (e) => {
                              setDetail({ ...detail, id: bike._id });

                              await axios
                                .put(
                                  "https://bike-rental-7ul5.onrender.com/api/users/bike",
                                  {
                                    id: bike._id,
                                    username: register.username,
                                  }
                                )
                                .then(() => {
                                  setChoose(1);
                                });
                            }}
                            className="btn btn-outline-dark mt-3"
                          >
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Bike;
