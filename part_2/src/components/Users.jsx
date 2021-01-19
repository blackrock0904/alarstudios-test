import React from 'react';
import { useSelector } from 'react-redux';
import { User } from './User.jsx';
import { v4 } from 'uuid';

export const Users = () => {
  
  const users = useSelector(state => state.users);
  return (
    <div className="collection">
      {users.map( el => <User user={el} key={v4()}/>)}
    </div>
  );
}
