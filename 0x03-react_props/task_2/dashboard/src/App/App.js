import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Login />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>

  );
}

export default App;
