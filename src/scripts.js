// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS
import './css/styles.css';
import { fetchAllData }  from './apiCalls';

// console.log(apiCalls);


// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/mario-run.png'
import './images/mushroom.png'
import './images/water-bottle.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

// import userData from './data/users';
import UserRepository from './UserRepository';
let userData;

window.onload = generateApiCalls();

function generateApiCalls() {
  console.log('WTf is going on!!')

  const fetch = fetchAllData()
  // .then(response => response.json())
  .then(data => {
     userData = data[0];
     console.log(userData);
     return;
   });


   // console.log(fetch);

  // .then(data => {
  //   console.log(data)
  // })

};
