const {getArray,ageFilter,handicapFilter,resultAnswer} = require('../scr/index.js');

describe('getArray function process', () => {
    var input = [];
    var resultExpect = [];
    test('Shold give "Open" if the age are lower than 55', () => {
        input = [[30,8]]
        resultExpect = ["Open"];
        expect(getArray(input)).toStrictEqual(resultExpect);
    });
    test('Shold be "Open" if the handicap upper than 7', () => {
        input = [[55,8]];
        resultExpect = ["Open"];
        expect(getArray(input)).toStrictEqual(resultExpect);
    });
});

describe('ageFilter function process', () => {
    var input = 30;
    test('Shold be 0 if age< 55', () => {
        expect(ageFilter(input)).toBe(0);
    });
});

describe('habdicapFilter function process', () => {
    var input = 0;
    test('Shold be 0 if handicap<7', () => {
        input  = 6;
        expect(handicapFilter(input)).toBe(0)
    });
    test('Shold be "Out of range" if handicap > 26', () => {
        input = 30
        expect(handicapFilter(input)).toStrictEqual("Out of Range");
    });
        test('Shold be "Out of range" if handicap < -2', () => {
          input = -10;
          expect(handicapFilter(input)).toStrictEqual("Out of Range");
        });
});
