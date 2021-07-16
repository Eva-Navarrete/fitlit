import { expect } from 'chai';
import User from '../src/User';
import Sleep from '../src/Sleep';
import Hydration from '../src/Hydration';
import Activity from '../src/Activity';
const userTestData = require('../src/data/userTestData');
const hydrationData = require('../src/data/hydrationTestData');
const sleepData = require('../src/data/sleepTestData');

describe('User', () => {
  let user1, activity;
  let sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7;
  let hydration1, hydration2, hydration3, hydration4, hydration5, hydration6, hydration7, hydration8;

  beforeEach(() => {
    user1 = new User(userTestData[0]);
    sleep1 = new Sleep(sleepData[0]);
    sleep2 = new Sleep(sleepData[1]);
    sleep3 = new Sleep(sleepData[2]);
    sleep4 = new Sleep(sleepData[3]);
    sleep5 = new Sleep(sleepData[4]);
    sleep6 = new Sleep(sleepData[5]);
    sleep7 = new Sleep(sleepData[6]);
    hydration1 = new Hydration(hydrationData[0]);
    hydration2 = new Hydration(hydrationData[1]);
    hydration3 = new Hydration(hydrationData[2]);
    hydration4 = new Hydration(hydrationData[3]);
    hydration5 = new Hydration(hydrationData[4]);
    hydration6 = new Hydration(hydrationData[5]);
    hydration7 = new Hydration(hydrationData[6]);
    hydration8 = new Hydration(hydrationData[7]);

    user1.hydrationData.push(hydration1);
    user1.hydrationData.push(hydration2);
    user1.hydrationData.push(hydration3);
    user1.hydrationData.push(hydration4);
    user1.hydrationData.push(hydration5);
    user1.hydrationData.push(hydration6);
    user1.hydrationData.push(hydration7);
    user1.hydrationData.push(hydration8);

    user1.sleepData.push(sleep1);
    user1.sleepData.push(sleep2);
    user1.sleepData.push(sleep3);
    user1.sleepData.push(sleep4);
    user1.sleepData.push(sleep5);
    user1.sleepData.push(sleep6);
    user1.sleepData.push(sleep7);

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


    expect(user1.sleepData).to.deep.equal([sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7]);
    expect(user1.sleepData.length).to.equal(7);
  });

  it('Should calculate the average number of hours slept per day', () => {
    const averageHours = user1.getAvgHoursSlept();

    expect(averageHours).to.equal(7.14);
  });

  it('Should calculate the average sleep quality for a user', () => {
    const averageQuality = user1.getAvgSleepQuality();

    expect(averageQuality).to.equal(3.3);
  });

  it('Should return the number of hours slept on a given day', () => {
    const dailySleep1 = user1.getDailySleepHours("2019/06/15");
    const dailySleep2 = user1.getDailySleepHours("2019/06/16");
    const dailySleep3 = user1.getDailySleepHours("2021/06/35");

    expect(dailySleep1).to.equal(5);
    expect(dailySleep2).to.equal(5);
    expect(dailySleep3).to.equal(null);
  });

  it('Should return a user\'s sleep quality for a given day', () => {
    const dailyQuality1 = user1.getDailySleepQuality("2019/06/15");
    const dailyQuality2 = user1.getDailySleepQuality("2019/06/16");
    const dailyQuality3 = user1.getDailySleepQuality("2021/06/35");

    expect(dailyQuality1).to.equal(2);
    expect(dailyQuality2).to.equal(2);
    expect(dailyQuality3).to.equal(null);
  });

  it('Should be able to return the number of hours slept each day over a given week', () => {
    const weeklyHours1 = user1.getWeeklySleepLog("2019/06/15", "2019/06/21");

    // Sad path testing
    // const weeklyHours2 = user1.getWeeklySleepLog("2020/03/02", "2021/05/06");

    expect(weeklyHours1).to.deep.equal([5, 5, 10, 7, 5, 10, 8]);
  });

  it.skip('Should return the sleep quality for each day of a given week', () => {
    const weeklyQuality1 = user1.getWeeklySleepQualityLog("2019/06/15", "2019/06/21");

    expect(weeklyQuality1).to.deep.equal([2, 2, 4, 4, 2, 4, 5]);
  });



  it('Should store a user\'s hydration data', () => {
    expect(user1.hydrationData).to.deep.equal([hydration1, hydration2, hydration3, hydration4, hydration5, hydration6, hydration7, hydration8]);
    expect(user1.hydrationData.length).to.equal(8);
  });

  //getAvgOunces()
  it('Should return the number of ounces consumed on a certain date', () => {
    const dailyOunces1 = user1.getDailyOunces("2019/06/14");
    const dailyOunces2 = user1.getDailyOunces("2019/06/15");
    const dailyOunces3 = user1.getDailyOunces("2019/06/35");

    expect(dailyOunces1).to.equal(70);
    expect(dailyOunces2).to.equal(95);
    expect(dailyOunces3).to.equal(null);
  });

  it('Should calculate the average ounces consumed per day, for all time', () => {
    const averageOunces = user1.getAvgOunces();

    expect(averageOunces).to.equal(70.6);
  });

  it('Should be able to return the number of ounces consumed daily for the last week', () => {
    const weeklyOunces = user1.getWeeklyOunces();

    expect(weeklyOunces).to.deep.equal([95, 50, 20, 80, 60, 90, 100]);
  });

  it('Should store a user\'s activity data', () => {
    user1.activityData.push(activity);

    expect(user1.activityData).to.deep.equal([activity]);
    expect(user1.activityData.length).to.equal(1);
  });
});
