import React from "react";
import Card from "../components/shared/Card";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          This is a react application to leave feedback for a product or
          service.
        </p>
        <p>Version: 1.0.0</p>
        <Link to="/">
          <FaHome></FaHome>&nbsp;Home
        </Link>
      </div>
    </Card>
  );
}

export default AboutPage;
