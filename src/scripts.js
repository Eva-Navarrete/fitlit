// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
let userWelcome = document.getElementById("userWelcome");
let userName = document.getElementById("userName");
let userInfo = document.getElementById("userInfo");
let dailyHydro = document.getElementById("dailyHydro");


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
     instantiateClasses(fetchedUser, fetchedHydration, fetchedSleep, fetchedActivity);

     return;
   });
};

function instantiateClasses(userData, hydrationData, sleepData, activityData) {
  const allHydration = hydrationData.map(hydro => new Hydration(hydro));
  const allSleep = sleepData.map(sleep => new Sleep(sleep));
  const allActivity = activityData.map(active => new Activity(active));
  const allUsers = userData.map(user => new User(user));
  const userRepo = new UserRepository(allUsers);
  userRepo.allSleepData = (allSleep);
  userRepo.allActivityData = (allActivity);
  const index = getRandomIndex(userRepo.users);
  const randomUser = userRepo.users[index];
  randomUser.sleepData = allSleep.filter(sleep => sleep.userID === randomUser.id);
  randomUser.hydrationData = allHydration.filter(hydro => hydro.userID === randomUser.id);
  randomUser.activityData = allActivity.filter(active => active.userID === randomUser.id);
  console.log('USER <>>>>', randomUser);
  console.log('USERREPO <>>>', userRepo)
  renderUserData(randomUser, userRepo);
  renderHydrationData(randomUser);
}

function renderUserData(userData, userRepoData) {
  userWelcome.innerHTML = `Welcome ${userData.returnName()}`;
  userName.innerHTML = `${userData.name}`;
  userInfo.innerHTML = `Address: ${userData.address} <br> Email: ${userData.email} <br> Stride Length: ${userData.strideLength} <br> Daily Step Goal: ${userData.dailyStepGoal} <br> Community Average Step Goal: ${userRepoData.getAllUsersAvgSteps()}`;
}

function renderHydrationData(userData) {
  const recentHydro = userData.hydrationData.slice(-1);
  dailyHydro.innerText = `${recentHydro[0].numOunces} ounces`
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
