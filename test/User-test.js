import { expect } from 'chai';
import User from '../src/User';
import Sleep from '../src/Sleep';
import Hydration from '../src/Hydration';
import Activity from '../src/Activity';
const userTestData = require('../src/data/userTestData');
const hydrationData = require('../src/data/hydrationTestData');

describe('User', () => {
  let user1, sleep, hydration1, hydration2, hydration3, activity;

  beforeEach(() => {
    user1 = new User(userTestData[0]);
    sleep = new Sleep();
    hydration1 = new Hydration(hydrationData[0]);
    hydration2 = new Hydration(hydrationData[1]);
    hydration3 = new Hydration(hydrationData[2]);
    activity = new Activity();
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be an instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it('Should have an id', () => {
    expect(user1.id).to.equal(1);
  });

  it('Should have an name', () => {
    expect(user1.name).to.equal('Shay Mitchel');
  });

  it('Should have an address', () => {
    expect(user1.address).to.equal('809 Cherry Lane Trail, Minneapolis, MN 55125');
  });

  it('Should have an email', () => {
    expect(user1.email).to.equal('bad.and.boujee@gmail.com');
  });

  it('Should have a stride length', () => {
    expect(user1.strideLength).to.equal(4.5);
  });

  it('Should have a daily step goal', () => {
    expect(user1.dailyStepGoal).to.equal(10000);
  });

  it('Should have a list of friends', () => {
    expect(user1.friends).to.deep.equal([19, 9, 31]);
  });

  it('Should return user first name', () => {
    expect(user1.returnName()).to.equal('Shay');
  });

  it('Should store a user\'s sleep data', () => {
    user1.sleepData.push(sleep);

    expect(user1.sleepData).to.deep.equal([sleep]);
    expect(user1.sleepData.length).to.equal(1);
  });

  it('Should store a user\'s hydration data', () => {
    user1.hydrationData.push(hydration1);
    user1.hydrationData.push(hydration2);
    user1.hydrationData.push(hydration3);

    expect(user1.hydrationData).to.deep.equal([hydration1, hydration2, hydration3]);
    expect(user1.hydrationData.length).to.equal(3);
  });

  //getAvgOunces()
  it('Should return the number of ounces consumed on a certain date', () => {
    user1.hydrationData.push(hydration1);
    user1.hydrationData.push(hydration2);
    user1.hydrationData.push(hydration3);

    const dailyOunces1 = user1.getDailyOunces("2019/06/14");
    const dailyOunces2 = user1.getDailyOunces("2019/06/15");
    // const dailyOunces3 = user1.getDailyOunces("2019/06/17");

    expect(dailyOunces1).to.equal(70);
    expect(dailyOunces2).to.equal(95);
    // expect(dailyOunces3).to.equal(undefined);
  });

  it('Should calculate the average ounces consumed per day, for all time', () => {
    user1.hydrationData.push(hydration1);
    user1.hydrationData.push(hydration2);
    user1.hydrationData.push(hydration3);

    const averageOunces = user1.getAvgOunces();

    expect(averageOunces).to.equal(71.7);
  });


  it('Should store a user\'s activity data', () => {
    user1.activityData.push(activity);

    expect(user1.activityData).to.deep.equal([activity]);
    expect(user1.activityData.length).to.equal(1);
  });
});
