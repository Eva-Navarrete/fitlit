class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.friends = user.friends;
    this.sleepData = [];
    this.hydrationData = [];
    this.activityData = [];
  }

  returnName() {
    const firstName = this.name.split(' ')[0];
    return firstName;
  }

  getDailyOunces(date) {
    if (this.hydrationData.map(water => water.date)
    .includes(date)) {
      const dailyOunces = this.hydrationData.find(hydration => hydration.date === date)
      return dailyOunces.numOunces;
    } else {
      return null;
    }
  }

  getAvgOunces() {
    const avgOunces = this.hydrationData.reduce((acc, hydration) => {
      return acc + hydration.numOunces;
    }, 0) / this.hydrationData.length;
    return Math.round(avgOunces * 10) / 10;
  }

  getWeeklyOunces() {
    return this.hydrationData.slice(-7)
    .map(water => water.numOunces);
  }
}

export default User;
