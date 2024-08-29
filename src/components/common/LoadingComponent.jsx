import React from "react";
import loading from "../../styles/Images/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loading} alt="Loading" />
  </div>
);

export default Loading;