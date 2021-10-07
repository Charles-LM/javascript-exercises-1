const repeatString = function(msg, num) {
    if (num < 0) return 'ERROR'
    let string = ''
    for (let i = 0; i < num; i++) {
      string += msg
    }
    return string;
  };



//finished



// Do not edit below this line
module.exports = repeatString;
