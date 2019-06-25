module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhanced < 20) {
    item.enhanced++;
    return { ...tem };
  } else {
    return { ...item };  
  }
}

function fail(item) {
  return { ...item };
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
