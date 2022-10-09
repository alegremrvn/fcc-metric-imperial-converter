function ConvertHandler() {
  
  this.getNum = function(input) {
    if (input === '') return 1

    let result;
    let firstLetter = input.match(/[a-zA-z]/)
  
    // unvalidatedNum.length !== 0
    let validateNum = (unvalidatedNum) => {
      if (unvalidatedNum.match(/[0-9\.\/]/gi).length === unvalidatedNum.length) {
        if (unvalidatedNum[0] === '/' ||
        unvalidatedNum[unvalidatedNum.length - 1] === '/') {
          return "invalid number"
        }
  
        let nums = unvalidatedNum.split('/')
        if (nums.length <= 2) {
          for (let num of nums) {
            if (Number.isNaN(Number(num))) return 'invalid number'
          }
  
          if (nums.length === 2) return Number(nums[0]) / Number(nums[1])
          return Number(nums[0])
        } else {
          return 'invalid number'
        }
      } else {
        return 'invalid number'
      }
    }
  
    if (firstLetter) {
      let unvalidatedNum = input.slice(0, firstLetter.index)
      if (unvalidatedNum.length === 0) {
        result = 1
      } else {
        result = validateNum(unvalidatedNum)
      }
    } else {
      result = validateNum(input)
    }
  
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
