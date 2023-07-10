import React from "react";

export const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        width: "100%",
        height: "75px",
        backgroundColor: "purple",
        display: "flex",
        alignItems: "center",
        alignContent: "flex-end",
        justifyContent: "space-around",
      }}
    >
      <a
        href="https://github.com/"
        style={{ textDecoration: "none", color: "white" }}
      >
        Github Repositories
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100003461396154"
        style={{ textDecoration: "none", color: "white" }}
      >
        FaceBook
      </a>
      <a
        href="//instagram.com"
        style={{ textDecoration: "none", color: "white" }}
      >
        Instagram
      </a>
    </div>
  );
};
