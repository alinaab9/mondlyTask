import React, { Component } from "react";

import "./styles.css";

export class TypesPageLayout extends Component {

  state = {
    selectedType: 1,
  }

  handleChange =  (ev) => {
    this.setState({
      selectedType: ev.target.value,
    })
  }

  render() {
    const { selectedType } = this.state;
    const { showList } = this.props;
    
    const options = [
      { value: 1, label: "Family" },
      { value: 2, label: "Friends" },
    ]

    return (
      <div className="mainWrapper">
        <div className="title"> Please choose a category </div>

        <div>
          <select 
            className="dropDown"
            onChange={this.handleChange} 
            value={selectedType}
          >
            {options.map(item => (
              <option key={item.value} value={item.value} id={item.value}>
                { item.label }
              </option>
            ))}
          </select>
        </div>

        <button className="roundButton" onClick={() => showList(selectedType)}> Ok </button>

      </div>
    );
  }
}
