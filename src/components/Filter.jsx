import React, { useContext } from "react";
import { datas } from "./Home";

function Filter() {
  const { data, filterData, setFilterData, detail, setDetail } =
    useContext(datas);
  return (
    <div className="border border-primary mt-3 p-2">
      <div className="d-md-flex flex-row justify-content-center">
        <div className="w-25">
          <label className="form-label text-white" htmlFor="form3Example3">
            city
          </label>
          <div className="form-outline mb-4">
            <i
              className="fa-solid fa-location-dot me-2"
              style={{ color: "#ffffff" }}
            ></i>
            <select
              className="rounded"
              autoFocus
              onChange={(e) => {
                setDetail({ ...detail, location: e.target.value });
              }}
            >
              <option className="text-center">--city--</option>
              <option value="Kodambakam">Kodambakam</option>
              <option value="Pallikaranai">Pallikaranai</option>
              <option value="Chromepet">Chromepet</option>
              <option value="Tambaram">Tambaram</option>
              <option value="Sholinganallur">Sholinganallur</option>
              <option value="Thoraipakkam">Thoraipakkam</option>
              <option value="Velacheri">Velacheri</option>
              <option value="Near Chennai Airport">Near Chennai Airport</option>
            </select>
          </div>
        </div>

        <div className="w-25">
          <label className="form-label text-white" htmlFor="form3Example3">
            pick up
          </label>
          <div className="form-outline mb-4">
            <i
              className="fa-regular fa-calendar-days me-2"
              style={{ color: "#ffffff" }}
            ></i>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              required
              onChange={(e) => {
                setDetail({ ...detail, pick: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="w-25">
          <label className="form-label text-white" htmlFor="form3Example3">
            drop off
          </label>
          <div className="form-outline mb-4">
            <i
              className="fa-regular fa-calendar-days me-2"
              style={{ color: "#ffffff" }}
            ></i>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              required
              onChange={(e) => {
                setDetail({ ...detail, drop: e.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="my-auto">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              let filter = data.filter((value) => {
                return value.location === detail.location;
              });
              setFilterData([...filter]);
            }}
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
