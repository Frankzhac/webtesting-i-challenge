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

// TEST SUCCESS
describe('enhancer.js', () => {
  describe('success() method', () => {
    it('successful test: SUCCESS', () => {
      expect(true).toBe(true);
    });
    // item enhancement at cap
    it('Item has max enchanments', () => {
      let calculate = enhancer.succeed(char);
      let result = calculate.enhanced;
      expect(result).toBe(20);
    });
    // item returned with +1 enhanced
    it('should increment the item by 1', () => {
      let calculate = enhancer.succeed(work);
      let result = calculate.enhanced;
      expect(result).toBe(1);
    });
  });
});


// TEST FAIL
describe('enhancer.js', () => {
  describe('fail() method', () => {
    it('fail test: FAIL', () => {
      expect(true).toBe(true);
    });
    // item enhanced under 15, lose +5 durability
    it('Item has under 15 enhancements', () => {
      let calculate = enhancer.fail(goat);
      let result = calculate.durability;
      expect(result).toBe(95);
    });
  });
});
