import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React", credit: 40}
];

const listNotifications = [
  {id: 1, type: "default", value: "New course available"},
  {id: 2, type: "urgent", value: "New resume available"},
  {id: 3, type: "urgent", html: {__html: getLatestNotification()}}
];

function App({isLoggedIn}) {
  return (
    <>
      <div className="root-notifications">
        <Notifications listNotifications={listNotifications}/>
      </div>
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login/>}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>

  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
