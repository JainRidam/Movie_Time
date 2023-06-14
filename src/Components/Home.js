import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style/Home.css";
import logo from "../image/logo.png";
import rating from "../image/rating.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const seats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let [shows, setshows] = useState();
  const [search, setSearch] = useState("all");
  const [searchResult, setSearchResult] = useState("all");
  const [localId, setlocalId] = useState(0);
  // const login = document.querySelector(".show-login");
  // if (login) {
  //   login.addEventListener("click", showpopup);
  // }
  const nav = useNavigate();
  function knowMoreFunc(id) {
    console.log(id);
    localStorage.setItem("MovieId", JSON.stringify(id));
    nav("/Details");
    // setTimeout(() => {
    // }, 1000);
  }
  function showpopup(id) {
    console.log("yes");
    setlocalId(id);
    console.log(id);
    document.getElementById("popup").classList.add("active");
    document.getElementById("main_div").classList.add("blur");
  }
  function removepopup() {
    document.getElementById("popup").classList.remove("active");
    document.getElementById("main_div").classList.remove("blur");
  }
  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${searchResult}`)
      .then(function (response) {
        console.log(response.data);
        setshows(response.data);
        //   console.log(shows);
      });
  }, [searchResult]);

  shows &&
    shows.map((ele) => {
      console.log(ele.show.name);
      //   console.log(ele.show.language);
      //   ele.show.genres &&
      //     ele.show.genres.map((gen) => {
      //       console.log(gen);
      //     });
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResult(search);
  };
  return (
    <div>
      <div id="main_div">
        <div className="home_outer_div">
          <nav>
            <ul>
              <li
                style={{
                  color: "rgb(248, 68, 100)",
                  fontSize: "2.5vw",
                }}
              >
                Movie Time
                <img src={logo} />
              </li>
              <li>
                <form onSubmit={handleSubmit}>
                  <input
                    autoComplete="off"
                    type="text"
                    id="search"
                    placeholder="Search Movies, Shows"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  ></input>
                </form>
              </li>
            </ul>
          </nav>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {shows &&
            shows.map((value) => {
              return (
                <div class="container">
                  <div class="image">
                    <div
                      style={{
                        height: "auto",
                        width: "auto",
                        objectFit: "cover",
                      }}
                    >
                      <img
                        src={
                          value.show.image
                            ? value.show.image.original
                            : "https://c8.alamy.com/comp/RC04FA/old-fashioned-movie-film-camera-logo-design-template-black-and-white-vector-illustration-RC04FA.jpg"
                        }
                        style={{ height: "30vw", width: "20vw" }}
                      ></img>
                      <div className="Rating_div">
                        <p
                          style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "0",
                          }}
                        >
                          <img
                            src={rating}
                            style={{ width: "1vw", marginRight: ".25vw" }}
                          />
                          Ratings: {value.show.rating.average}
                        </p>
                        <p style={{ marginRight: "0.5vw" }}>
                          Language: {value.show.language}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="overlay">
                    <div style={{ marginTop: "15vw" }}>
                      <div id="first">
                        {value.show.status === "Ended" ||
                        value.show.status === "To Be Determined" ? (
                          <></>
                        ) : (
                          <>
                            <button
                              style={{ cursor: "pointer" }}
                              className="show-login"
                              onClick={(event) =>
                                showpopup(value.show.id, event)
                              }
                            >
                              Book Tickets
                            </button>
                            <button
                              style={{ cursor: "pointer" }}
                              onClick={(event) =>
                                knowMoreFunc(value.show, event)
                              }
                            >
                              Details..
                            </button>
                          </>
                        )}
                      </div>
                      <div id="second">
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          {value.show.status === "Ended" ||
                          value.show.status === "To Be Determined" ? (
                            <>
                              <p>Timings: N/A</p>
                              <p>Duration: N/A</p>
                            </>
                          ) : (
                            <>
                              {" "}
                              <p>Timings: {value.show.schedule.time}</p>
                              <p>Duration: {value.show.runtime}min</p>
                            </>
                          )}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                          }}
                        >
                          {value.show.status === "Ended" ||
                          value.show.status === "To Be Determined" ? (
                            <>
                              <p>Day: N/A</p>
                              <p>Status: {value.show.status}</p>
                            </>
                          ) : (
                            <>
                              {" "}
                              <p>Day: {value.show.schedule.days}</p>
                              <p>Status: {value.show.status}</p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div
        id="popup"
        className="full_form_div"
        style={{ border: "1px solid black" }}
      >
        {shows &&
          shows.map((v) => {
            // if (v.show.id === localStorage.getItem("MovieId")) {
            if (v.show.id === localId) {
              // localStorage.setItem("MovieId", null);
              return (
                <>
                  <div className="close-btn" onClick={removepopup}>
                    &times;
                  </div>
                  <div className="form_rating_div">
                    <p className="left_p">Rating: {v.show.rating.average}</p>
                    <p className="right_p">Language: {v.show.language}</p>
                  </div>
                  <div className="form_timing_div">
                    <p className="left_p"> Timings: {v.show.schedule.time}</p>
                    <p className="right_p">
                      Duration: {v.show.averageRuntime} min
                    </p>
                  </div>
                  <div>
                    <p className="left_p">
                      Only on(Day): {v.show.schedule.days}
                    </p>
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
                </>
              );
            }
          })}
      </div>
    </div>
  );
}

export default Home;
