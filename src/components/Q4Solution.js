import React from "react";
import { employDetail } from "../constants";

export default function Q4Solution() {
  return (
    <div className="common">
      <h1>Solution 4</h1>
      <h3>User details in a list format using javascript and table tag !!!</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <tr>
            <th>first_name</th>
            <th>last_name</th>
            <th>department</th>
          </tr>
          {employDetail.employees.map((item, index) => {
            const { first_name, last_name, department } = item;

            return (
              <tr key={index}>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{department}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <hr />
    </div>
  );
}
