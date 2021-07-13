  const fetchUserData = () => {
    return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    // .then(data => data)
    .catch(err => console.error('not Working'))

  };
console.log('user',fetchUserData());

  const fetchSleepData = () => {
    return fetch('http://localhost:3001/api/v1/sleep')
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error('not Working'))
  };
console.log('sleep',fetchSleepData());
  const fetchActivityData = () => {
    return fetch('http://localhost:3001/api/v1/activity')
    .then(response => response.json())
    // .catch(err => displayErr(err))
  };
console.log('activity',fetchActivityData());
  const fetchHydrationData = () => {
    return fetch('http://localhost:3001/api/v1/hydration')
    .then(response => response.json())
    // .catch(err => displayErr(err))
  }
console.log('hydro',fetchHydrationData());

const fetchAllData = () => {
  return Promise.all([fetchUserData(), fetchSleepData(), fetchActivityData(), fetchHydrationData()])

}

console.log('all dta ', fetchAllData());

export default { fetchAllData };
