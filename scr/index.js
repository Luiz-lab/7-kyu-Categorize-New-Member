let input = [];
function getArray(input) {
    const menberAnswer = [];
    for (let i = 0;i < input.length; i++) {
        var age = input[i][0];
        var handicap = input[i][1];
        var resultHandicapFunction = handicapFilter(handicap);
        var resultAgeFunction = ageFilter(age);
        menberAnswer.push(resultAnswer(age,handicap))
    }
    return menberAnswer;
}
function handicapFilter(handicap) {
    var resultHandcap = 0;
    if (handicap> -2 && handicap < 26) {
        if (handicap>7) {
            return resultHandcap = 1;
        }
        else{
            return resultHandcap = 0;
        }
    }
    else{
        return "Out of Range";
    }
}
function ageFilter(age) {
    var returnAge = 1;
    if (age>55) {
        return returnAge = 1;
    }
    else{
       return returnAge = 0
    }
}
function resultAnswer(resultAge, resultHandicap) {
    if (resultAge == 1 && resultHandicap == 1) {
        return "Senior";
    }
    else{
        return "Open"
    }
}


module.exports={
    getArray,
    ageFilter,
    handicapFilter,
    resultAnswer
}