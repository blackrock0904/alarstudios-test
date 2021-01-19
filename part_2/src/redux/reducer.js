import { ADD, DELETE, EDIT } from './actionTypes';
export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return ({...state, 
        users:[...state.users, action.payload]
      });
      case DELETE:
      return ({...state, 
        users: state.users.filter(user => user !== action.payload)
      });
      case EDIT:
      return ({...state, 
        users: state.users.map(user => {
          if ( user !== action.payload.user) {
            return user;
          } else {
            return {name: action.payload.name, phone: action.payload.phone};
          }
        })
      });
    default:
      return state;
  }
}
