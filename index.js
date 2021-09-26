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

function hasTargetSum(array, target) {
  // create an object to keep track of all the numbers we've seen
  const seenNumbers = {};
  // iterate over the array of numbers
  for (const number of array) {
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - number;
    // check if any of the keys in our object is the complement to the current number
    // if so, return true
    if (seenNumbers[complement]) return true;
    // save the current number as the key on our object so we can check it later against other numbers
    seenNumbers[number] = true;
    console.log(seenNumbers)
  }
  // if we reach the end of the array, return false
  return false;
}

hasTargetSum([3, 8, 12, 4, 11, 7], 10)


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

/*
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
*/