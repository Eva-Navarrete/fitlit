export const fetchCalls = {

  fetchUserData() {
    return fetch('http://localhost:3001/api/v1/users')
    .then(response => response.json())
    .then(data => data.users)
    .catch(err => displayErr(err))
  },


  fetchSleepData() {
    
  }
}
