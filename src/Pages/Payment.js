import React, { Component } from "react";

class Payment extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="text-black md:text-3xl text-2xl flex justify-center md:m-3 m-8 align-center">
          Reservations
        </h1>
        {/* {this.props.isLogged === true ? (
          <Stripe isLogged={this.props.isLogged} />
        ) : (
          <h1>Log in Bro</h1>
        )} */}
      </div>
    );
  }
}

export default Payment;
