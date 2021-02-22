import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ModeContext from './context'

ReactDOM.render(
  <React.StrictMode>
    <ModeContext>
       <App />
    </ModeContext>
  </React.StrictMode>
  ,
  document.getElementById('root')
);


