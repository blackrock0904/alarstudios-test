import React, { useState } from 'react';
import { editUser } from '../redux/actions';
import { useDispatch } from 'react-redux';

export const EditForm = ({ user, setModeEdit }) => {
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();
  const saveHandler = async (e) => {
    e.preventDefault();
    dispatch(editUser(user, name, phone));
    setModeEdit(false);
  }
  return (
    <div>
      <div className="row">
        <input className="input-field col s6" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="input-field col s6" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="row">
        <button className="input-field col s6" onClick={saveHandler}>Save</button>
        <button className="input-field col s6" onClick={() => setModeEdit(false)}>Cancel</button>
      </div>
    </div>
  )
}
