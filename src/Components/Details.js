import React from "react";
import "../Style/Details.css";
import rating from "../image/rating.png";
function Details() {
  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const MovieIdString = localStorage.getItem("MovieId");
  const MovieIdJson = JSON.parse(MovieIdString);
  console.log(MovieIdJson);
  function showpopup(id) {
    console.log("yes");

    console.log(id);
    document.getElementById("popup").classList.add("active");
    document.getElementById("main_div").classList.add("blur");
  }
  function removepopup() {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("main_div").classList.remove("blur");
  }
  return (
    <div className="Outer_div_details">
      <div
        style={{
          display: "flex",
          backgroundcolor: "rgb(31, 37, 51)",
        }}
      >
        <div className="Details_cover_div" id="main_div">
          <img
            src={MovieIdJson.image.original}
            style={{ width: "75vw", height: "auto" }}
          ></img>
        </div>
        <div className="Details_sidebar_div">
          <div>
            <div className="sidebar_div">
              <b>Name</b>: {MovieIdJson.name}
            </div>
            <div className="sidebar_div">
              <b>Rating</b>: {MovieIdJson.rating.average}
            </div>
            <div className="sidebar_div">
              <b>Status</b>: {MovieIdJson.status}
            </div>
            <div className="sidebar_div">
              <b>Duration</b>: {MovieIdJson.averageRuntime}m
            </div>
            <div className="sidebar_div">
              {" "}
              <b>Premiered</b>: {MovieIdJson.premiered}
            </div>
            <div className="sidebar_div">
              {" "}
              <b>Timing</b>: {MovieIdJson.schedule.time}
            </div>
            <div className="sidebar_div">
              <b>Only On</b>: {MovieIdJson.schedule.days}
            </div>
            <div className="sidebar_div" style={{ display: "flex" }}>
              <b>Genres</b> :{" "}
              {MovieIdJson.genres.map((v) => {
                return (
                  <div
                    style={{
                      marginLeft: "1vw",
                      border: "1px solid",
                      borderRadius: "2vw",
                      width: "5vw",
                      height: "1.25vw",
                      textAlign: "center",
                    }}
                  >
                    {v}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="div_inside_cover">
          <div className="content_div_inside_cover_div">
            <div>
              <div className="img_div_inside_content_div">
                <img
                  src={MovieIdJson.image.original}
                  style={{ height: "20vw" }}
                />
              </div>
            </div>
            <div className="right_flexed_div_inside_content_div">
              <div>
                <div id="name_div_inside_content_div">{MovieIdJson.name}</div>
                <div className="rating_div_inside_content_div">
                  <span>
                    <img src={rating} style={{ width: "1.25vw" }} />
                  </span>
                  <span>{MovieIdJson.rating.average}</span>
                  <span className="dot"></span>
                  <span>{MovieIdJson.runtime}m</span>
                </div>
                <div id="book_button_div">
                  <button id="btn" onClick={showpopup}>
                    Book Now
                  </button>
                </div>
                <div id="summary_div">
                  <p>{MovieIdJson.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="popup"
          className="book_form_div"
          style={{ border: "1px solid black" }}
        >
          <div className="close-btn" onClick={removepopup}>
            &times;
          </div>
          <div className="form_rating_div">
            <p className="left_p">Rating: {MovieIdJson.rating.average}</p>
            <p className="right_p">Language: {MovieIdJson.language}</p>
          </div>
          <div className="form_timing_div">
            <p className="left_p"> Timings: {MovieIdJson.schedule.time}</p>
            <p className="right_p">
              Duration: {MovieIdJson.averageRuntime} min
            </p>
          </div>
          <div>
            <p className="left_p">Only on(Day): {MovieIdJson.schedule.days}</p>
          </div>
          <div className="input_form_div">
            <form>
              <div>
                <label>Name</label>
                <input type="text" placeholder="Your Name"></input>
              </div>
              <div>
                {" "}
                <label>Mobile No</label>
                <input type="text" placeholder="Phone No" />
              </div>
              <div>
                {" "}
                <label>No of seats</label>
                <input list="data" style={{ width: "3vw" }} />
                <datalist id="data">
                  {seats.map((n) => {
                    return <option value={n} />;
                  })}
                </datalist>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <button>Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
