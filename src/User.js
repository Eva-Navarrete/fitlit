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

  getAvgHoursSlept() {
    const avgHours = this.sleepData.reduce((acc, sleep) => {
      return acc += sleep.hoursSlept;
    }, 0) / this.sleepData.length;
    return Math.round(avgHours * 100) / 100;
  }

  getAvgSleepQuality() {
    const avgQuality = this.sleepData.reduce((acc, sleep) => {
      return acc += sleep.sleepQuality;
    }, 0) / this.sleepData.length;
    return Math.round(avgQuality * 10) / 10;
  }

  getDailySleepHours(date) {
    if (this.sleepData.map(sleep => sleep.date)
    .includes(date)) {
      const timeLog = this.sleepData.find(sleep => sleep.date === date);
      return timeLog.hoursSlept;
    } else {
      return null;
    }
  }

  getDailySleepQuality(date) {
    if (this.sleepData.map(sleep => sleep.date)
    .includes(date)) {
      const qualityLog = this.sleepData.find(sleep => sleep.date === date);
      return qualityLog.sleepQuality;
    } else {
      return null;
    }
  }

  getWeeklySleepLog(date) {
    const index = this.sleepData.findIndex(sleep => sleep.date === date);
    if (index >= 6) {
      return this.sleepData.slice(index - 6, index + 1)
      .map(sleep => sleep.hoursSlept);
    } else {
      return null;
    }
  }

  getWeeklySleepQualityLog(date) {
    const index = this.sleepData.findIndex(sleep => sleep.date === date);
    if (index >= 6) {
      return this.sleepData.slice(index -6, index + 1)
      .map(sleep => sleep.sleepQuality);
    } else {
      return null;
    }
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

  getDailyMiles(date) {
    if (this.activityData.map(activity => activity.date)
    .includes(date)) {
      const step = this.activityData.find(activity => activity.date === date)
      return Math.round((step.numSteps * this.strideLength) / 528) / 10;
    } else {
      return null;
    }
  }

  getMinutesActive(date) {
    if (this.activityData.map(activity => activity.date)
    .includes(date)) {
      const minutes = this.activityData.find(activity => activity.date === date)
      return minutes.minutesActive;
    } else {
      return null;
    }
  }

  getAvgMinutesActive(date) {
    if (this.activityData.map(activity => activity.date)
    .includes(date)) {
      const index = this.activityData.findIndex(activity => activity.date === date)
      return Math.round(this.activityData.slice(index - 6, index + 1)
      .reduce((acc, activity) => {
        return acc += activity.minutesActive;
      }, 0) / 7);
    } else {
      return null;
    }
  }

  evaluateStepGoal(date) {
    const step = this.activityData.find(activity => activity.date === date)
    if (step.numSteps >= this.dailyStepGoal) {
      return true;
    } else {
      return false;
    }
  }

  returnStepGoalMet() {
    return this.activityData.filter(activity => activity.numSteps >= this.dailyStepGoal)
    .map(activity => activity.date)
  }

  getStairRecord() {
    return this.activityData.sort((a,b) => b.flightsOfStairs - a.flightsOfStairs)[0].flightsOfStairs;
  }
}




export default User;
