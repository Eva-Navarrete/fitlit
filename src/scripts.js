// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS
// import { fetchCalls } from './apiCalls'
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/mario-run.png'
import './images/mushroom.png'
import './images/water-bottle.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';
import UserRepository from './UserRepository';

window.onload = generateApiCalls();


function generateApiCalls() {
  fetchCalls.fetchUserData()
  .then(data => {
    console.log(data)
  })
  return
}
