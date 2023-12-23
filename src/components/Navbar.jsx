import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#!">
          Trip At Rent
        </a>
        <form className="d-flex">
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
