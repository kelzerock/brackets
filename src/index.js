module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    arr.push(bracketsConfig[i].join(''))
  }
  while (arr.some(item => {
    if (str.includes(item)) { return true } else { return false }
  }) === true)
    {
      for (let x = 0; x < arr.length; x++) {
        str = str.replace(arr[x], '')
      }
    }

if(str === ''){return true} else {return false}
}
