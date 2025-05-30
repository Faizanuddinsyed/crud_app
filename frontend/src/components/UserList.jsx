import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <table border="1" cellPadding="10" width="100%">
      <thead>
        <h1>form of crud</h1>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td><td>{user.email}</td><td>{user.phone}</td>
            <td>
              <button onClick={() => onEdit(user)}>Edit</button>{' '}
              <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
