import React from 'react';
import { Table } from 'reactstrap';

const DataTable = () => {
  const data = [
    { id: 1, name: 'bashir jibrin', age: 20, occupation: 'Engineer' },
    { id: 2, name: 'nazif abdul', age: 35, occupation: 'Designer' },
    { id: 3, name: 'ayomide ???', age: 40, occupation: 'Manager' },
    // Add more data as needed
  ];

  const columns = Object.keys(data[0]); // Assuming all objects in the data have the same keys

  return (
    <div>
       <h3 className="mt-4 text-center">User Table</h3>
    <Table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            {columns.map(column => (
              <td key={`${row.id}-${column}`}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default DataTable;
