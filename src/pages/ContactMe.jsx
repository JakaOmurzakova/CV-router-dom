import React from "react";
import photo from "../components/picture/428_834bde67-5d68-4bea-bba5-6334cb89c875_grande.webp";

const ContactMe = () => {
  return (
    <div style={{ margin: "30px" }}>
      <img src={photo} />
      <h1>You can contact me by social pages</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: "28px",
        }}
      >
        <h5>What do our users say about CVmaker?</h5>
      </div>
    </div>
  );
};

export default ContactMe;
