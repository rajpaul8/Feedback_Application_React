import React from "react";
import Card from "../components/shared/Card";
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
      </div>
    </Card>
  );
}

export default AboutPage;
