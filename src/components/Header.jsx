import React from "react";
import Filter from "./Filter";

function Header() {
  return (
    <header className="bg-dark py-1">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Trip At Rent</h1>
          <p className="lead fw-normal text-white-50 mb-0">
            Best bikes at affordable price
          </p>
        </div>
        <Filter />
      </div>
    </header>
  );
}

export default Header;
