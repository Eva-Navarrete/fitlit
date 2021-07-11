import { expect } from 'chai';
import User from '../src/User';
const userTestData = require('../src/data/userTestData')

describe('User', () => {
  let user1

  beforeEach(() => {
    user1 = new User(userTestData[0]);
  });

  it('Should be a function', () => {
    expect(User).to.be.a('function')
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

  it('Shoud have an address', () => {
    expect(user1.address).to.equal('809 Cherry Lane Trail, Minneapolis, MN 55125')
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
    expect(user1.friends).to.deep.equal([19, 9, 31])
  });

  it('Should return user first name', () => {
    expect(user1.returnName()).to.equal('Shay');
  })
})
