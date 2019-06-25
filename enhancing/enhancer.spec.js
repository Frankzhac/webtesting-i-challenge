const enhancer = require("./enhancer.js");
// test away!
// items

const team = {
  name: 'Apex team',
  enhanced: 10,
  durability: 100
};

const char = {
  name: 'Cool anime char',
  enhanced: 20,
  durability: 0
};

const goat = {
  name: 'Look for the goat',
  enhanced: 15,
  durability: 80
};

const work = {
  name: 'Work on yourself',
  enhanced: 0,
  durability: 0
};

// TEST REPAIRS
describe('enhancer.js', () => {
  describe('repair() method', () => {
    it('sucessful test: REPAIRS', () => {
      expect(true).toBe(true);
    });
    // if full durability
    it('item value already at 100', () => {
      let calculate = enhancer.repair(goat);
      let result = calculate.durability;
      expect(result).toBe(100);
    });
    // if partial durability
    it('item needs repairs', () => {
      let calculate = enhancer.repair(work);
      let result = calculate.durability;
      expect(result).toBe(100);
    });
  });
});
