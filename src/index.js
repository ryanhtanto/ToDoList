import React from 'react';
import ReactDOM from 'react-dom/client';
import ActivityApp from './components/ActivityApp'



// importing css
import 'bootstrap/dist/css/bootstrap.css';
import './styles/style.css'
import 'font-awesome/css/font-awesome.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActivityApp />
  </React.StrictMode>
);


