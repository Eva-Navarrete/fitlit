import { expect } from 'chai';
import User from '../src/User';
const userTestData = require('..src/data/activityTestData')

describe('User', () => {
  let user1

  beforeEach(() => {
    user1 = new User(userTestData[0]);
  })

  it('Should be a function', () => {
    expect(User).to.be.('function')
  });

  it('Should be an instance of User', () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it('Should have an id', () => {
    expect(user.id).to.equal(1);
  });

  it('Should')
})
