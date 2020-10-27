import React, { Component } from "react";

import Card2 from "../../components/Card2";

import "../styles/bloques.css";

import data2 from "/data/data2.json";

export default class Bloques2 extends Component {
  constructor() {
    super();
    this.state = {
      data2: data2
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <Card2 data={this.state.data} />
          </div>
        </div>
      </>
    );
  }
}
