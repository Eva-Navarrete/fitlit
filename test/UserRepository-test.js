import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Sleep from '../src/Sleep';
import Activity from '../src/Activity';
const userTestData = require('../src/data/userTestData');
const sleepData = require('../src/data/sleepTestData');

describe('User Repository', () => {

  let userRepo, user1, user2, user3;

  beforeEach(() => {
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
    user3 = new User(userTestData[2]);
    userRepo = new UserRepository([user1, user2, user3]);

    userRepo.allSleepData = sleepData;
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);

      console.log(userRepo.allSleepData);
      console.log(userRepo.allSleepData.length);
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

  it.skip('should be able to return the average sleep quality for all users', () => {
    const avgSleepQuality = userRepo.getAllAvgSleepQuality();

    expect(avgSleepQuality).to.equal(2.8);
  })
});
