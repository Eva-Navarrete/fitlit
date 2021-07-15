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
}

export default UserRepository;
