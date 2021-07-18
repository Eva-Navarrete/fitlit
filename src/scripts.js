// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
let userWelcome = document.getElementById("userWelcome");
let userName = document.getElementById("userName");
let userInfo = document.getElementById("userInfo");


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
  const userRepo = new UserRepository(allUsers);
  const randomUser = userRepo.users[getRandomIndex(userRepo.users)];
  userWelcome.innerHTML = `Welcome ${randomUser.returnName()}`;
  userName.innerHTML = `${randomUser.name}`;
  userInfo.innerHTML = `Address: ${randomUser.address} <br> Email: ${randomUser.email} <br> Stride Length: ${randomUser.strideLength} <br> Daily Step Goal: ${randomUser.dailyStepGoal} <br> Community Average Step Goal: ${userRepo.getAllUsersAvgSteps()}`;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
