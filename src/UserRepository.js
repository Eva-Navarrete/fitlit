class UserRepository {
  constructor(users) {
    this.users = users;
    this.allSleepData = [];
    this.allActivityData = [];
  }

  getUserData(id) {
    return this.users.find(user => user.id === id);
  }

  getAllUsersAvgSteps() {
    return this.users.reduce((acc, user) => {
      return acc + user.dailyStepGoal;
    }, 0) / this.users.length;
  }

  getAllAvgSleepQuality() {
    const avgQuality = this.allSleepData.reduce((acc, sleep) => {
      return acc += sleep.sleepQuality;
    }, 0) / this.allSleepData.length;
    return Math.round(avgQuality * 10) / 10;
  }

  getAvgStairs(date) {
    return Math.round(this.allActivityData.reduce((acc,activity) => {
      if (activity.date === date) {
        acc += activity.flightsOfStairs;
      }
      return acc;
    }, 0) * 10 / this.allActivityData.filter(activity => activity.date === date).length) / 10;
  }

  getAvgSteps(date) {
    return Math.round(this.allActivityData.reduce((acc, activity) => {
      if (activity.date === date) {
        acc += activity.numSteps;
      }
      return acc;
    }, 0) / this.allActivityData.filter(activity => activity.date === date).length)
  }

  getAvgMinutes(date) {
    return Math.round(this.allActivityData.reduce((acc, activity) => {
      if(activity.date === date) {
        acc += activity.minutesActive;
      }
      return acc;
    }, 0) / this.allActivityData.filter(activity => activity.date === date).length)
  }
}

export default UserRepository;
