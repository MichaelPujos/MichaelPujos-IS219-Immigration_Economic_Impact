import React from "react";
import "../styles/DataTable.css";

const DataTable = ({ data = [] }) => {
  if (!data.length) {
    return <p>No data available.</p>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => (
              <th key={index}>{key.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
