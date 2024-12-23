import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const entries = useSelector((state) => state.data.entries);

  return (
    <div className="container mt-4">
      <h1>Homepage</h1>
      <Link to="/add" className="btn btn-primary mb-3">Add Entry</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.id}</td>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>
                <Link to={`/update/${entry.id}`} className="btn btn-warning">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
