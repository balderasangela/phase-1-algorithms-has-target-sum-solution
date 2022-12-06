function hasTargetSum(array, target) {
  //make empty array for result
  let res = []
  //make empty map
  let numMap = new Map();
  //iterate over array
  for (let i = 0; i < array.length; i++) {
  //find goal number that would result in target number
    const currentNum = array[i]
    const goalNum = target - currentNum
    //if goal exists, return result array
    if (numMap.has(goalNum)) {
      res[0] = array[i]
      res[1] = numMap.get(goalNum)
      return true
    }
    else {
      numMap.set(currentNum, i)
    }
  }
  console.log('numMap' + numMap)
  //if goal does not exist, return empty array
  return false
}

console.log(hasTargetSum([1,3,5,7], 12))


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