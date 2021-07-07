module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhanced < 20) {
    item.enhanced++;
    return { ...item };
  } else {
    return { ...item };
  }
}

function fail(item) {
  if (item.enhanced < 15) {
    item.durability -= 5;
    return { ...item };
  } else if (item.enhanced >= 15) {
    item.durability -= 10;
    return { ...item };
  } else if (item.enhanced > 16) {
    item.enhanced -= 1;
    return { ...item };
  }
}

function repair(item) {
  if (item.durability < 100) {
    return { ...item, durability: 100 };
  } else {
    return { ...item };
  }
}

function get(item) {
  return { ...item };
}
