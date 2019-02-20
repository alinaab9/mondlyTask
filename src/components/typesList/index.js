import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export class TypesListLayout extends Component {
  state = {
    selectedValue: 0,
  }

  selectField = value => {
    this.setState({
      selectedValue: value,
    })
  }

  render() {
    const { selectedValue } = this.state;
    const { data } = this.props;
    
    return (
      <div className="mainWrapper">
        {data.length > 0 ? (
          <Fragment>
            <div className="details"> These are your members. Please choose one </div>

            <div className="listWrapper">
              <ul>
                {data.map((member, index) => {
                  return (
                    <li key={index}
                        className={`${selectedValue === index ? "selectedRow" : ""}`}
                        onClick={() => this.selectField(index)}
                    >
                        {member.name}
                    </li>
                  )
                })}
              </ul>  
              <Link 
                to={{
                  pathname: "/countdown",
                  state: { 
                    member: data[selectedValue],
                  }
                }}
                className="roundButton"
              > 
                OK
              </Link>
            </div>   
          </Fragment>                 
          ) : (
            <div className="noDataDiv"> There are no members </div>
          )}
      </div>
    );
  }
}
