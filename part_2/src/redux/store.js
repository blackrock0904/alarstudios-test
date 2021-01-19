import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './reducer';

const initialState = {
  users: [
    {name: 'Petr', phone: 89009009900},
    {name: 'Stefan', phone: 89009009901},
    {name: 'Bob', phone: 89009009902},
    {name: 'Mark', phone: 89009009903},
    {name: 'Alex', phone: 89009009904}
  ]
};
export const store = createStore(reducer, initialState, composeWithDevTools());

