import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <div
      style={{
        color: "white",
        width: "100%",
        height: "50px",
        backgroundColor: "purple",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <h1
        style={{
          display: "flex",
          alignContent: "flex-start",
          marginLeft: "25px",
        }}
      >
        CV
      </h1>
      <h3>Zharkyn Omurzakova</h3>
      <div style={{ display: "flex", gap: "25px" }}>
        <h3 onClick={() => navigate("/")}>Main Page</h3>
        <h3 onClick={() => navigate("/project")}>My Project</h3>
        <h3 onClick={() => navigate("/contact")}>Contact Me</h3>
      </div>
    </div>
  );
};

export default Navbar;
