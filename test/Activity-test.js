import { expect } from 'chai';
import Activity from '../src/Activity';
const data = require('../src/data/activityTestData');

describe('Activity', () => {

  let activity;

  beforeEach(() => {
    activity = new Activity(data[0]);
  });

  it('Shhould be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('Should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('Should hold a user\'s ID', () => {
    expect(activity.userID).to.equal(1);
  });

  it('Should store a date', () => {
    expect(activity.date).to.equal("2019/06/15");
  });

  it('Should hold user\'s number of steps', () => {
    expect(activity.numSteps).to.equal(3577);
  });

  it('Should hold user\'s minutes active', () => {
    expect(activity.minutesActive).to.equal(140);
  });

  it('Should hold user\'s flight of stairs', () => {
    expect(activity.flightsOfStairs).to.equal(16);
  });
});
