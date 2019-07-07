import React from "react";

import LogoImg from "assets/react-logo.png";

const Home = () => {
  return (
    <div>
      <h1 className="title">Home</h1>
      <img src={LogoImg} alt="" />
    </div>
  );
};

export { Home };
