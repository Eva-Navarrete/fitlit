import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Sleep from '../src/Sleep';
import Activity from '../src/Activity';
const userTestData = require('../src/data/userTestData');
const sleepData = require('../src/data/sleepTestData');
const activityData = require('../src/data/activityTestData');

describe('User Repository', () => {

  let userRepo, user1, user2, user3;

  beforeEach(() => {
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
    user3 = new User(userTestData[2]);
    userRepo = new UserRepository([user1, user2, user3]);

    userRepo.allSleepData = sleepData;
    userRepo.allActivityData = activityData;
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should store all user data', () => {
    expect(userRepo.users).to.deep.equal([user1, user2, user3]);
  });

  it('should be able to return user data by ID', () => {
    expect(userRepo.getUserData(1)).to.equal(user1);
  });

  it('should be able to return the average step goal of all users', () => {
    expect(userRepo.getAllUsersAvgSteps()).to.equal(10000);
  });

  it('should be able to store all user\'s sleep data', () => {
    expect(userRepo.allSleepData).to.deep.equal(sleepData);
    expect(userRepo.allSleepData.length).to.equal(21);
  });

  it('should be able to return the average sleep quality for all users', () => {
    const avgSleepQuality = userRepo.getAllAvgSleepQuality();

    expect(avgSleepQuality).to.equal(2.8);
  });

  it.skip('should be able store all user\'s activity data', () => {
    expect(userRepo.allActivityData).to.deep.equal(activityData);
    expect(userRepo.allActivityData.length).to.equal(10);
  });

  it.skip('should return the average of stairs climbed by all users on a specific date', () => {
    const avgStairs1 = userRepo.getAvgStairs("2019/06/15");
    // const avgStairs2 = userRepo.getAvgStairs("2019/06/17");

    expect(avgStairs1).to.equal(20.3);
    // expect(avgStairs2).to.equal(33);
  });

  it.skip('should return the average steps taken on a specific day by all users', () => {
    const avgSteps1 = userRepo.getAvgSteps("2019/06/15");
    // const avgSteps2 = userRepo.getAvgSteps("2019/06/17");

    expect(avgSteps1).to.equal(6146);
    // expect(avgSteps2).to.equal(7402);
  });

  it.skip('should return the average minutes active for all users on a specific date', () => {
    const avgMinutes1 = userRepo.getAvgMinutes("2019/06/15");
    // const avgMinutes2 = userRepo.getAvgMinutes("2019/06/17");

    expect(avgMinutes1).to.equal(156);
    // expect(avgMinutes2).to.equal(116);
  });
});
