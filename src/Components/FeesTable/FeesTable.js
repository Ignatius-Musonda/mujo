import React from "react";
import "./FeesTable.css";

const FeesTable = () => {
  // const feesData = [
  //   { grade: "Grade 1-7", tuition: "ZMW 5,000", lunch: "ZMW 1,200", uniform: "ZMW 1,500", registration: "ZMW 500" },
  //   { grade: "Grade 8-9", tuition: "ZMW 6,000", lunch: "ZMW 1,500", uniform: "ZMW 1,800", registration: "ZMW 600" },
  //   { grade: "Grade 10-12", tuition: "ZMW 7,500", lunch: "ZMW 1,800", uniform: "ZMW 2,000", registration: "ZMW 800" },
  // ];
  const feesData = [
    {
        "grade": "Nursery",
        "tuition": "ZMW 500.00",
        "lunch": "ZMW 600.00",
        "uniform": "ZMW 200.00",
        "registration": "ZMW 30.00"
    },
    {
        "grade": "Grade 1-7",
        "tuition": "ZMW 600.00",
        "lunch": "ZMW 600.00",
        "uniform": "ZMW 200.00",
        "registration": "ZMW 30.00"
    },
    {
        "grade": "Grade 8-9",
        "tuition": "ZMW 700.00",
        "lunch": "ZMW 600.00",
        "uniform": "ZMW 250.00",
        "registration": "ZMW 50.00"
    },
    {
        "grade": "Grade 10-12",
        "tuition": "ZMW 750.00",
        "lunch": "ZMW 600.00",
        "uniform": "ZMW 250.00",
        "registration": "ZMW 50.00"
    }
]


  return (
    <div className="fees-table-container">
      <table className="fees-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Tuition</th>
            <th>Lunch</th>
            <th>Uniform</th>
            <th>Registration</th>
          </tr>
        </thead>
        <tbody>
          {feesData.map((row, index) => (
            <tr key={index}>
              <td>{row.grade}</td>
              <td>{row.tuition}</td>
              <td>{row.lunch}</td>
              <td>{row.uniform}</td>
              <td>{row.registration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeesTable;
