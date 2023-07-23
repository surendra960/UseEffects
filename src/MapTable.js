import React from "react";

function MapTable() {
  const students = [
    { name: "Anil", email: "Anil@test", contact: 888 },
    { name: "sidhu", email: "sidhu@test", contact: 111 },
    { name: "sam", email: "sam@test", contact: 812 },
    { name: "PeteA", email: "PeteA@test", contact: 842 },
  ];
  return (
    <div className="box marginTop">
      <h1>Handle Array with List</h1>
      <div className="display">
        <table border= '1' className="marginBottem">
          <tr>
            <td>Name</td>
            <td>email</td>
            <td>contact</td>
          </tr>

          {
          students.map((data) => (
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
          ))
          }
        </table>
      </div>
    </div>
  );
}

export default MapTable;
