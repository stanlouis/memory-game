import React from "react";

const Robot = ({ name, email, id, roboClicked }) => {
  return (
    <div
      className="tc bg-light-green dib br3 pa2-m ma2 grow bw2 shadow-5"
      onClick={() => roboClicked(id)}
    >
      <img src={`https://robohash.org/${id}50*50`} alt="robots" />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Robot;
