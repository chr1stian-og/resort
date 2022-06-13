import { React, Component } from "react";
import { Link} from "react-router-dom";
import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001" });

class Login extends Component {
  state = {
    data: {
      email: "",
      password: "",
      password2: "",
    },
  };

  handleForm = (e) => {
    const dataToSend = { ...this.state.data };
    dataToSend[e.target.id] = e.target.value;
    this.setState({ data: dataToSend });
    console.log(dataToSend);
  };

  async submitForm() {
    if (this.state.data.password1 === this.state.data.password2) {
      const data = {
        email: this.state.data.email,
        password: this.state.data.password,
      };
      const resp = await api
        .post("/login", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log("Error while adding user", err);
        });
    } else {
      alert("the passwords doenst match");
      console.log("the passwords doenst match");
    }
  }

  render() {
    return (
      <div>
        <script src="input-script.js"></script>
        <h1 className="text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">Register</h1>
        <form id="loginForm" onSubmit={() => this.submitForm()}>
          <div className="form first">
            <div className="px-5 p-4">
              <div className="fields">
                <div className="input-field">
                  <label>Email</label>
                  <input
                    id="email"
                    onChange={(e) => this.handleForm(e)}
                    value={this.state.data.email}
                    autoComplete="off"
                    style={{ width: "350px" }}
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Password</label>
                  <input
                    id="password"
                    onChange={(e) => this.handleForm(e)}
                    autoComplete="off"
                    value={this.state.data.password}
                    style={{ width: "350px" }}
                    type="password"
                    placeholder="Type password"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Type your Password again</label>
                  <input
                    id="password2"
                    onChange={(e) => this.handleForm(e)}
                    autoComplete="off"
                    value={this.state.data.password2}
                    style={{ width: "350px" }}
                    type="password"
                    placeholder="Type password"
                    required
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
                  <button className="backBtn" form="loginForm">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default Login;
