import React, { useState } from "react";
import { Link } from "react-router-dom";
import Contract from "../Components/Contract";
import axios from "axios";
import emailjs from "emailjs-com";
import { useAuth0 } from "@auth0/auth0-react";

function Book() {
  
  const pdfFile = require("../short photography contract.pdf");
  const api = axios.create({ baseURL: "http://localhost:3001" });
  const {loginWithRedirect, isAuthenticated} = useAuth0();

  function getAuth(){
    return isAuthenticated; 
  }

  const [data, setData] = useState({
    timeInicio: "",
    timeFim: "",
    place: "",
    imageNumber: "50",
    resolution: "medium",
    type: "personal",
    price: "0",
  })

  function handleForm(e) {
    const dataToSend = data;
    dataToSend[e.target.id] = e.target.value;
    console.log(data)
    setData({dataToSend});
  }

  function openContract() {
    if (getAuth()) {
      alert("User must be logged");
      return "User must be logged";
    }
    // var blur = document.getElementById("blur");
    // blur.classList.toggle("active");
    // var popup = document.getElementById("popup");
    // popup.classList.toggle("active");
  }

  function setStateData() {
    const info = {
      timeInicio: data.timeInicio,
      timeFim: data.timeFim,
      place: data.place,
      imageNumber: data.imageNumber,
      resolution: data.resolution,
      type: data.type,
      price: data.price,
    };
    return info;
  }

  function sendData(info) {
    if (getAuth()) {
      const resp = api.post("/setDetails", info).then(
        (resp) => {
          // setState({ itsOkay: true });
          // window.open("http://localhost:3000/payment");
          console.log("Data Saved sucessfully");
          return true;
        },
        (err) => {
          // setState({ itsOkay: false });
          console.log("Error while saving", err.text);
          return true;
        }
      );
    } else {
      alert("You need to login first");
      window.open("http://localhost:3000/login", "_self");
    }
    return false;
  }

  function submitForm(e) {
    document.getElementById("message").value = JSON.stringify(data);
    const data = setStateData();
    if (sendData(data)) {
      e.eventDefault();
      emailjs
        .sendForm(
          "service_uaxwktv",
          "template_zhmszrn",
          e.target,
          "QXKIOsJR522n30JF-"
        )
        .then(
          (result) => {
            console.log("Code: ", result, "Email Sent");
          },
          (error) => {
            console.log("Error while Sending email", error.text);
          }
        );
    } else {
      alert("Error while submiting form");
    }
  }

  function openPdf() {
    console.log("opened");
    window.open(pdfFile, "_self");
  }

  function getPrice() {
    return "67678";
  }

  return (
    <div>
      <script src="input-script.js"></script>
      <div className="cont" id="blur">
        
        <div className="content">
          <h1 className="text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">
            Booking page
          </h1>
          <form
            id="submitData"
            onSubmit={(e) => submitForm(e)}
            className="mx-5 mb-10 mt-2 "
          >
            <input
              type="text"
              name="subject"
              onChange={(e) => handleForm(e)}
              value="CDK"
              hidden
            ></input>
            
            <div className="fields">
              <div className="input-field">
                <label>Adress</label>
                <div className="grid md:mx-5">
                  <input
                    type=""
                    id="place"
                    placeholder="Enter the adress"
                    value={data.place}
                    style={{ width: "350px" }}
                    required
                    onChange={(e) => handleForm(e)}
                  />
                </div>
              </div>
              <div className="input-field">
                <label>Enter start and finish time</label>
                <div className="md:grid md:grid-cols-2">
                  <div className="grid">
                    <input
                      type="time"
                      id="timeInicio"
                      placeholder="Enter show up time"
                      style={{ width: "165px", margin: "10px" }}
                      required
                      onChange={(e) => handleForm(e)}
                    />
                  </div>
                  <div className="grid">
                    <input
                      type="time"
                      id="timeFim"
                      placeholder="Enter finish time"
                      style={{ width: "165px", margin: "10px" }}
                      required
                      onChange={(e) => handleForm(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="input-field">
                <div className="md:grid md:grid-cols-2 ">
                  <div className="grid">
                    <label className="flex justify-center align-center">
                      Number of Photos
                    </label>
                    <select
                      id="imageNumber"
                      style={{ width: "165px", margin: "10px" }}
                      value={data.imageNumber}
                      required
                      onChange={(e) => handleForm(e)}
                    >
                      <option>50</option>
                      <option>150</option>
                      <option>350</option>
                      <option>500</option>
                    </select>
                  </div>
                  <div className="grid">
                    <label className="flex justify-center align-center">
                      Resolution
                    </label>
                    <select
                      id="resolution"
                      style={{ width: "165px", margin: "10px" }}
                      value={data.resolution}
                      required
                      onChange={(e) => handleForm(e)}
                    >
                      <option>Medium</option>
                      <option>High</option>
                      <option disabled>Ultra High</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-field">
                <label>Type</label>
                <select
                  style={{ width: "175px" }}
                  id="type"
                  value={data.type}
                  required
                  onChange={(e) => handleForm(e)}
                >
                  <option>Personal</option>
                  <option>Business</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="input-field">
                <label>Price</label>
                <input
                  type="text"
                  id="price"
                  placeholder="$"
                  min="10"
                  max="500"
                  value={() => getPrice()}
                  style={{ width: "175px", fontSize: "15px" }}
                  disabled
                  onChange={(e) => handleForm(e)}
                />
              </div>

              <div className="buttons, flex justify-center align-center items-center">
                <Link
                  to="/"
                  style={{ textStyle: "none" }}
                  className="backBtnLink"
                >
                  <button className="backBtn">back</button>
                </Link>
                <button onClick={()=>openContract()} className="backBtn">
                  Book
                </button>
              </div>
            </div>
          </form>
          <h1
            onClick={()=>window.open(pdfFile, "_self")}
            className="flex justify-left align-left underline duration-1000 flex-wrap text-1xl hover:text-pink-800 hover:cursor-pointer text-black"
          >
            View Contract
          </h1>
        </div>
      </div>
      <Contract />
    </div>
  );
}

export default Book;
