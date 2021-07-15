import { expect } from 'chai';
import Sleep from '../src/Sleep';
const data = require('../src/data/sleepTestData');

describe('Sleep', () => {

  let sleep;

  beforeEach(() => {
    sleep = new Sleep(data[0]);
  });

  it.skip('Should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it.skip('Should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it.skip('Should hold a user\'s ID', () => {
    expect(sleep.userID).to.equal(1);
  });

  it.skip('Should store a date', () => {
    expect(sleep.date).to.equal("2019/06/15");
  });

  it.skip('Should store the number of hours a user slept', () => {
    expect(sleep.hoursSlept).to.equal(5);
  });

  it.skip('Should hold the user\'s sleep quality for the night', () => {
    expect(sleep.sleepQuality).to.equal(2);
  });
});
