const intersection = function (nums1, nums2) {
  /*
        create two sets to remove duplicate items from both arrays
    */
  let num1Set = new Set(nums1);
  let num2Set = new Set(nums2);

  /* Create result array where we will store common elements */
  let result = [];

  /*
        Iterate over all of the elements in num1Set
        and check if num2Set has any number from num1Set, it that's true that means that they have common elements and push those common elements in the result array
    */
  for (let num of num1Set) {
    if (num2Set.has(num)) {
      result.push(num);
    }
  }

  /* Finally return result array */
  return result;
};

console.log(intersection([1, 2, 3, 4], [2, 3, 10, 12]));
