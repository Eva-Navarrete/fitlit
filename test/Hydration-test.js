import { expect } from 'chai';
import Hydration from '../src/Hydration';
const data = require('../src/data/hydrationTestData');

describe('Hydration', () => {

  let hydration;

  beforeEach(() => {
    hydration = new Hydration(data[0]);
  });

  it('Should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('Should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('Should hold a user\'s ID', () => {
    expect(hydration.userID).to.equal(1);
  });

  it('Should store a date', () => {
    expect(hydration.date).to.equal('2019/06/14');
  });

  it('Should store the number of ounces drank', () => {
    expect(hydration.numOunces).to.equal(70);
  });
});
