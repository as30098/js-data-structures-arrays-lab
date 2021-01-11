let drivers = [];
drivers.push("Milo", "Otis", "Garfield");


function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let appendArr = drivers.slice();
  appendArr.push(name);
  return appendArr;
}

function prependDriver(name) {
  let prependArr = drivers.slice();
  prependArr.unshift(name);
  return prependArr;
}

function removeLastDriver() {
  let removeLastArr = drivers.slice();
  removeLastArr.pop();
  return removeLastArr;
}

function removeFirstDriver() {
  let removeFirstArr = drivers.slice();
  removeFirstArr.shift();
  return removeFirstArr;
}
