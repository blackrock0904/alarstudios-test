import { ADD, DELETE, EDIT } from './actionTypes.js';

export const addUser = (name, phone) => {
  return {
    type: ADD,
    payload: {name, phone}
  }
}
export const deleteUser = (user) => {
  return {
    type: DELETE ,
    payload: user
  }
}
export const editUser = (user, name, phone) => {
  return {
    type: EDIT ,
    payload: {user, name, phone}
  }
}
