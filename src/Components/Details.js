import React from "react";

function Details() {
  const MovieIdString = localStorage.getItem("MovieId");
  const MovieIdJson = JSON.parse(MovieIdString);
  console.log(MovieIdJson);
  return (
    <div>
      <div>{MovieIdJson.id}</div>
      <div>{MovieIdJson.name}</div>
    </div>
  );
}

export default Details;
