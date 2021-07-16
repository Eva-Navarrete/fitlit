class UserRepository {
  constructor(users) {
    this.users = users;
    this.allSleepData = [];
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
}

export default UserRepository;
