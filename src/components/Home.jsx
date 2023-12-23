import React, { createContext, useContext, useEffect, useState } from "react";
import "../styles/Signinpage.css";
import { userContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./Footer";
import Header from "./Header";
import Bike from "./bike";
import Head from "./Head";

const datas = createContext();

function Home() {
  const { register, setRegister } = useContext(userContext);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [choose, setChoose] = useState(0);
  const [detail, setDetail] = useState({
    location: "",
    pick: "",
    drop: "",
    id: "",
  });
  let i = 0;
  useEffect(() => {
    axios.get("https://bike-rental-7ul5.onrender.com/api/bikes").then((res) => {
      setData(res.data);
    });
    let user = sessionStorage.getItem("loggedInUser");
    let loggedUser = JSON.parse(user);
    setRegister(loggedUser);
  }, []);
  return (
    <div>
      <datas.Provider
        value={{
          data,
          filterData,
          setFilterData,
          detail,
          setDetail,
          choose,
          setChoose,
        }}
      >
        <Navbar />
        {choose == 0 ? <Header /> : <Head />}
        <Bike />
        <Footer />
      </datas.Provider>
    </div>
  );
}

export { Home as default, datas };
