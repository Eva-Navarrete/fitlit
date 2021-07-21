  const fetchUserData = () => {
    return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .catch(err => console.error('not Working'));
  };

  const fetchSleepData = () => {
    return fetch('http://localhost:3001/api/v1/sleep')
    .then(response => response.json())
    .catch(err => console.error('not Working'));
  };

  const fetchActivityData = () => {
    return fetch('http://localhost:3001/api/v1/activity')
    .then(response => response.json())
    .catch(err => console.error('not Working'));
  };

  const fetchHydrationData = () => {
    return fetch('http://localhost:3001/api/v1/hydration')
    .then(response => response.json())
    .catch(err => console.error('not Working'));
  };

  const fetchAllData = () => {
    return Promise.all([fetchUserData(), fetchSleepData(), fetchActivityData(), fetchHydrationData()]);
  };

  export { fetchAllData };
