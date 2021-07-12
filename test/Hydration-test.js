import { expect } from 'chai';
import Hydration from '../src/Hydration';
const data = require('../src/data/hydrationTestData');

describe('Hydration', () => {

  let hydration;

  beforeEach(() => {
    hydration = new Hydration(data[0]);
    console.log(data[0]);
  });

  it.skip('Should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it.skip('Should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it.skip('Should hold a user\'s ID', () => {
    expect(hydration.userID).to.equal(1);
  });

  it.skip('Should store a date', () => {
    expect(hydration.date).to.equal('2019/06/14');
  });

  it.skip('Should store the number of ounces drank', () => {
    expect(hyration.numOunces).to.equal(70);
  });
});
