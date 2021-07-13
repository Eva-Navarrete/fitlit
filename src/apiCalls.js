  const fetchUserData = () => {
    return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data))
    // .catch(err => displayErr(err))
  };

  const fetchSleepData = () => {
    return fetch('http://localhost:3001/api/v1/sleep');
    .then(response => response.json())
    // .catch(err => displayErr(err))
  };

  const fetchActivityData = () => {
    return fetch('http://localhost:3001/api/v1/activity');
    .then(response => response.json())
    // .catch(err => displayErr(err))
  };

  const fetchHydrationData = () => {
    return fetch('http://localhost:3001/api/v1/hydration');
    .then(response => response.json())
    // .catch(err => displayErr(err))
  }

const fetchAllData = () => {
  return Promise.all([fetchUserData(), fetchSleepData(), fetchActivityData(), fetchHydrationData()])
}

export default fetchAllData;
