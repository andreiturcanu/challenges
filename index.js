// 1. Write a function to check whether a given integer is within 20 of 100 or 400.
function chkIntWtn20of100or400(int) {
  return Math.abs(int - 100) <= 20 || Math.abs(int - 400) <= 20;
}
console.log(chkIntWtn20of100or400(98));

// 2. Write a function to check from two given integers, whether one is positive and another one is negative.
function chkDiffSign(int1, int2) {
  return int1 * int2 !== 0 ? Math.sign(int1) !== Math.sign(int2) : false;
}
console.log(chkDiffSign(10, -29));

// 3. Write a function to remove a character at the specified position of a given string and return the new string.
function rmvCharAt(str, pos) {
  return pos < str.length + 1
    ? str.slice(0, pos - 1) + str.slice(pos)
    : 'Cannot do, position is longer than string';
}
console.log(rmvCharAt('Sometext', 9));

// 4. Write a function to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
function chgPos(str) {
  return str.length === 1
    ? str
    : str.length > 1
    ? str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
    : 'String too short';
}
console.log(chgPos('Someone'));

// 5. Write a function to create a new string from a given string with the first character of the given string added at the back.
function addFirstChrToBack(str) {
  return str.length > 1 ? str + str[0] : 'String is too short';
}
console.log(addFirstChrToBack('MyCustomString'));

// 6. Write a function to check whether a given positive number is a multiple of 3 or a multiple of 7.
function chkM3orM7(num) {
  if (num > 0) {
    return Number.isInteger(num / 3)
      ? Number.isInteger(num / 7)
        ? 'Multiple of both 3 and 7'
        : 'Multiple of 3'
      : Number.isInteger(num / 7)
      ? 'Multiple of 7'
      : 'You number is neither a multiple of 3 nor of 7';
  } else {
    return 'Number must be positive. Please insert a positive number';
  }
}
console.log(chkM3orM7(21));

// 7. Write a function to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
function addThree(str) {
  return str.length >= 3
    ? str.substr(0, 3) + str + str.slice(str.length - 3)
    : 'String too short';
}
console.log(addThree('Abc'));

// 8. Write a function to check whether a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.
function strAt5th(str) {
  return str.indexOf('Script') === 4
    ? str.substr(0, 4) + str.slice('Script'.length + 4)
    : str;
}
console.log(strAt5th('ThisScript includes Script'));

// 9. Write a function to find the largest of three given integers.
function largestIntOfThree(int1, int2, int3) {
  return Number.isInteger(int1 * int2 * int3)
    ? Math.max(int1, int2, int3)
    : 'One of the numbers is not an integer';
}
console.log(largestIntOfThree(12, 23, 34));

// 10. Write a function to find a value which is nearest to 100 from two different given integer values.
function nearest100(int1, int2) {
  return Number.isInteger(int1 * int2)
    ? Math.abs(int1 - 100) > Math.abs(int2 - 100)
      ? int2
      : Math.abs(int1 - 100) === Math.abs(int2 - 100)
      ? 'Both numbers are equally distanced from 100'
      : int1
    : 'One of the numbers is not an integer';
}
console.log(nearest100(102, 99));
