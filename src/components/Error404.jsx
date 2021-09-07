import React from "react";
import Error from "../images/Error.jpg";

class Error404 extends React.Component {
  render() {
    return (
      <div>
        <p className=" bg-danger text-center fs-1 text-white">Page not found</p>
        <img className="card-img" src={Error} alt="" />
      </div>
    );
  }
}
export default Error404;
