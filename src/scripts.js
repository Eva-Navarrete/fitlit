// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS
import './css/styles.css';
import { fetchAllData } from './apiCalls';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';
import './images/mario-run.png';
import './images/mushroom.png';
import './images/water-bottle.png';

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

// import userData from './data/users';
import UserRepository from './UserRepository';
import User from './User';
import Sleep from './Sleep';
import Hydration from './Hydration';
import Activity from './Activity';

let fetchedUser, fetchedSleep, fetchedActivity, fetchedHydration;

window.onload = fetchData();

function fetchData() {
  console.log('WTf is going on!!')
  const fetch = fetchAllData()
  .then(data => {
     fetchedUser = data[0].userData;
     fetchedSleep = data[1].sleepData;
     fetchedActivity = data[2].activityData;
     fetchedHydration = data[3].hydrationData;
     console.log(fetchedUser, fetchedSleep, fetchedActivity, fetchedHydration)
     instantiateUsers(fetchedUser);
     return;
   });
};

function instantiateUsers(data) {
  const allUsers = fetchedUser.map(user => new User(user));
  console.log("instantiateUsers <>>>>", allUsers);
}
