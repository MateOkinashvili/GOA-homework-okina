import React from 'react';
import UsersList from './UsersList';

function UsersData() {
  const users = [
    { id: 1, name: 'Anna', email: 'ana@.com' },
    { id: 2, name: 'Giorgi', email: 'gio@.com' },
    { id: 3, name: 'Nino', email: 'nino@.com' }
  ];

  return <UsersList users={users} />;
}

export default UsersData;
