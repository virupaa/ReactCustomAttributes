import "./styles.css";
import React from "react";

import ReactDOM from "react-dom";
console.clear();

class Header extends React.Component {
  handleClick(event) {
    console.log("ddede");
    console.log(event.target.getAttribute("name"));
  }
  render() {
    return <Logo onClick={this.handleClick} />;
  }
}

const Logo = ({ onClick }) => {
  return (
    <div>
      <a name="name" onClick={onClick}>
        HIIHIII
      </a>
    </div>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));
