import React from "react";

const About = ({ companyName, employeeSize }) => {
  return (
    <div>
      <h1>About</h1>
      <div>
        CompanyName is {companyName}
        <br />
      </div>
      <div>Employee Size is {employeeSize}</div>
    </div>
  );
};

export default About;
