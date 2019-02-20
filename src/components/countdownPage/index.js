import React, { Component } from "react";
import { VelocityComponent } from "velocity-react";

export class CountdownPage extends Component {

  render() {
    const { member } = this.props.history.location.state;

    return (
      <VelocityComponent
        animation={{
          width: 288,
          opacity: 1,
        }}
        duration={500}
      >
        <div>
          <div> {member.name} </div>
          <hr />
        </div>
      </VelocityComponent>
    );
  }
}