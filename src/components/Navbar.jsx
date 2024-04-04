import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

function Navbar() {
  const { register, setregister } = useContext(userContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#!">
          Welcome {register.name} !
        </a>
        <form className="d-flex">
          <Link
            to="/Signin"
            onClick={() => {
              sessionStorage.clear();
              setregister({
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
          <Link to="/Bookings" className="btn btn-outline-dark">
            <i className="fa-solid fa-motorcycle me-1"></i>
            Bookings
            <span className="badge bg-dark text-white ms-1 rounded-pill"></span>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
