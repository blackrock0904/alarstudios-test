import React  from 'react';
import { Users } from './components/Users.jsx'
import { InputForm } from './components/InputForm.jsx';


const App = () => {  
    return (
      <div className="card horizontal">
      <div className="card-content">
        <Users />
        <InputForm />
      </div>
      </div>
    );
}

export default App;
