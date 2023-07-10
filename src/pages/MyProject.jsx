import React from "react";
import photo1 from "../components/picture/msg6019008272-2760.jpg";
import photo2 from "../components/picture/1f61c.png";

const MyProject = () => {
  return (
    <div>
      <h3
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        My Big Project
        <img src={photo2} />
      </h3>
      <img src={photo1} style={{ width: "330px", height: "430px" }} />
      <h5>My Real Projects you can see on Github Page</h5>
    </div>
  );
};

export default MyProject;
