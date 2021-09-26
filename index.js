// SOLUTION 3 - time complexity: O(n) / space complexity: O(n)
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;

    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

/* SOLUTION 2 - time complexity: O(n) / space complexity: O(n)
function hasTargetSum(array, target) {
  // 1 step
  const seenNumbers = {};
  for (const number of array) {
    // n steps
    const complement = target - number;
    // n steps
    if (seenNumbers[complement]) return true;
    // n steps
    seenNumbers[number] = true;
  }
  // 1 step
  return false;
}
*/

/* SOLUTION 1 - time complexity: O(n²) / space complexity: O(n)
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // n steps (depending on the length of the input array)
    const complement = target - array[i];
    // n * n steps (nested loop)
    for (let j = i + 1; j < array.length; j++){
      if (array[j] === complement){
        return true;
      }
    }
  }
  // 1 step
  return false;
}
*/

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
