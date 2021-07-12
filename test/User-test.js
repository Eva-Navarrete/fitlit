import { expect } from 'chai';
import User from '../src/User';
const userTestData = require('../src/data/userTestData')
import Sleep from '../src/Sleep';
import Hydration from '../src/Hydration';
import Activity from '../src/Activity';

describe('User', () => {
  let user1, sleep, hydration, activity;

  beforeEach(() => {
    user1 = new User(userTestData[0]);
    sleep = new Sleep();
    hydration = new Hydration();
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
    user1.hydrationData.push(hydration);

    expect(user1.hydrationData).to.deep.equal([hydration]);
    expect(user1.hydrationData.length).to.equal(1);
  });

  it('Should store a user\'s activity data', () => {
    user1.activityData.push(activity);

    expect(user1.activityData).to.deep.equal([activity]);
    expect(user1.activityData.length).to.equal(1);
  })
})
