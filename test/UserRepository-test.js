import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
const userTestData = require('../src/data/userTestData');
describe('User Repository', () => {

  let userRepo;

  beforeEach(() => {
    userRepo = new UserRepository(userTestData);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should store all user data', () => {
    expect(userRepo.data).to.deep.equal(userTestData);
  });

  it.skip('should be able to return user data by ID', () => {
    expect(userRepo.getUserData(1)).to.equal(userTestData[0]);
    expect(userRepo.getUserData(4).to.equal(undefined));
  });

  it.skip('should be able to return the average step goal of all users', () => {
    expect(userRepo.getAllUsersAvgSteps().to.equal(10000));
  });
});
