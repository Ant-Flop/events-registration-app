import { useEffect, useState } from "react";
import { getUsersByEvent } from "../../api/api";

const Table = ({ id }: { id: string }) => {
  const [table, setTable] = useState([]);

  //   useEffect(() => {
  //     try {
  //       const result = getUsersByEvent(parseInt(id));
  //       setTable(result as any);
  //     } catch (error) {
  //       setTable([]);
  //     }
  //   }, [id]);

  return (
    <div className="right-content">
      <h2 className="table-title">Event Attendees</h2>
      <div className="table-wrapper">
        <table className="scrollable-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Registered Date</th>
            </tr>
          </thead>
          <tbody>
            {table.map((element, index) => (
              <tr>
                <td>{element.name}</td>
                <td>{element.email}</td>
                <td>{element.date}</td>
              </tr>
            ))}
            <tr>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>2023-08-16</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>jane@example.com</td>
              <td>2023-08-16</td>
            </tr>
            <tr>
              <td>Michael Johnson</td>
              <td>michael@example.com</td>
              <td>2023-08-16</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
