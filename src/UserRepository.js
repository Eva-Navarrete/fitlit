class UserRepository {
  constructor(user) {
    this.data = user;
  }

  getUserData(id) {
    return this.data.find(user => user.id === id);
  }

  getAllUsersAvgSteps() {
    return this.data.reduce((acc, user) => {
      return acc + user.dailyStepGoal;
    }, 0) / this.data.length;
  }
}

export default UserRepository;
