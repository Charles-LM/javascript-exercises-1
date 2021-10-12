const leapYears = function(leapTest) {
    let leapYear = false;
    if(leapTest % 4 === 0){
        leapYear = true;
        if(leapTest % 100 === 0){
            leapYear = false;
            if(leapTest % 400 === 0){
                leapYear = true;
            }
        }
    }
    return leapYear;

    //return leapTest % 4 === 0 && (leapTest % 100 != 0 || leapTest % 400 === 0)



  
    

};

// Do not edit below this line
module.exports = leapYears;
