import React, { useState, useEffect } from 'react';
import { addUser } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { Error } from './Error';

export const InputForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [nameValid, setNameValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const nameVal = !!name.match(/\w{1,}/);
    const phoneVal = !!phone.match(/^\+?[\d-]{4,}/);
    await setNameValid(nameVal);
    await setPhoneValid(phoneVal);
    if (nameVal === true && phoneVal === true) {
      dispatch(addUser(name, phone));
      setPhone('');
      setName('');
      setNameValid(true);
      setPhoneValid(true);
    }
  }
  
  return (
    <form
      className="col s12"
      onSubmit={submitHandler}
    >
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input
            id="icon_prefix"
            type="text"
            className="validate"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="icon_prefix">Name</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">phone</i>
          <input
            id="icon_telephone"
            type="tel"
            className="validate"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <label htmlFor="icon_telephone">Telephone</label>
        </div>
      </div>

      <div className="row">
        <div className="col s6">
          {!nameValid && <Error msg={'Name is not valid.'} />}
        </div>
        <div className="col s6">
          {!phoneValid && <Error msg={'Phone is not valid'} />}
        </div>
      </div>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Add
        <i className="material-icons right">send</i>
      </button>
    </form>

  );
}
