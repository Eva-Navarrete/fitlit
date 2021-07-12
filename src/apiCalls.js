export const fetchCalls = {

  fetchUserData() {
    return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => data.users)
    .catch(err => displayErr(err))
  },

  fetchSleepData() {
    return fetch('http://localhost:3001/api/v1/sleep');
    .then(response => response.json())
    .then(data => data.sleep)
    .catch(err => displayErr(err))
  },

  fetchActivityData() {
    return fetch('http://localhost:3001/api/v1/activity');
    .then(response => response.json())
    .then(data => data.activity)
    .catch(err => displayErr(err))
  },

  fetchHydrationData() {
    return fetch('http://localhost:3001/api/v1/hydration');
    .then(response => response.json())
    .then(data => data.hydration)
    .catch(err => displayErr(err))
  }

}
