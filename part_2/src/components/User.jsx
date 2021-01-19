import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/actions';
import { EditForm } from './EditForm';

export const User = ({ user }) => {
  const [modeEdit, setModeEdit] = useState(false);
  const dispatch = useDispatch();
  return (
    !modeEdit ?
      <div className="collection-item">
        <div>{`name: ${user.name}`}</div>
        <div>{`phone: ${user.phone}`}</div>
        <button onClick={() => setModeEdit(!modeEdit)}>edit</button>
        <button onClick={() => dispatch(deleteUser(user))}>delete</button>
      </div>
      : <EditForm setModeEdit={setModeEdit} user={user}/>
      
  );
}

