//importing the applydiscount function from the logic test file 
const {applyDiscount} = require('../src/logic');

describe('applyDiscount',()=>{

    //typical use case : testing a discount with a decimal percentage
    it('should apply decimal percentage discount correctly',()=>{
        expect(applyDiscount(150,14.2)).toBe(128.7);
    });

    //edge case : verfiying behavior with a negative total 
    it('should apply discount to negative totals',()=>{
        expect(applyDiscount(-60,30)).toBe(-42);
    });

    //error handling : testing a tiny total to check precision 
    it('should handle very small totals',()=>{
        expect(applyDiscount(0.01,50)).toBeCloseTo(0.005);
    });

})