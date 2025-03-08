const {applyDiscount} = require('../src/logic');

describe('applyDiscount',()=>{

    it('should apply decimal percentage discount correctly',()=>{
        expect(applyDiscount(150,14.2)).toBe(128.7);
    });

    it('should apply discount to negative totals',()=>{
        expect(applyDiscount(-60,30)).toBe(-42);
    });

    it('should handle very small totals',()=>{
        expect(applyDiscount(0.01,50)).toBeCloseTo(0.005);
    });

})