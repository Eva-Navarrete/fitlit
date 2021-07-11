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

  it.skip('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it.skip('should store all user data', () => {
    expect(userRepo.data).to.deep.equal(userTestData);
  });

  
});
