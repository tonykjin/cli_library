module.exports = (input, string) => {
  let long = input;
  let short = string;
  if (input.length < string.length) {
    long = string;
    short = input;
  }
  let longerLength = long.length;
  if (!longerLength) return 1.0;
  return (longerLength - editDistance(long, short)) / parseFloat(longerLength);
};

const editDistance = (input, string) => {
  input = input.toLowerCase();
  string = string.toLowerCase();
  let result = new Array();
  for (let i = 0; i <= input.length; i++) {
    let lastValue = i;
    for (let x = 0; x <= string.length; x++) {
      if (i == 0) { // account for first index of both strings
        result[x] = x;
      } else {
        if (x > 0) {
          let newValue = result[x - 1];
          if (input.charAt(i - 1) != string.charAt(x - 1)) {
            newValue = Math.min(Math.min(newValue, lastValue), result[x]) + 1; // levenshtein distance
          }
          result[x - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) {
      result[string.length] = lastValue;
    }
  }
  return result[string.length];
};
