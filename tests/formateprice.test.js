//importing the format price function form the logic code file 
const {formatPrice} = require('../src/logic');

describe('format price',()=>{
    //typical use case : testing formatting with a large number with decimals 
    it('should format large numbers correctly',()=>{
        expect(formatPrice(146545.938)).toBe('$146545.94');
    });

    //edge case : testing the minimum valid value
    it('should format zero correctly',()=>{
        expect(formatPrice(0)).toBe("$0.00");
    });
    
    //error handling : testing invalid inputs that should send an error 
    it('throws an error for non-numeric input',()=>{
        expect(()=>formatPrice('not a number')).toThrow();
        expect(()=>formatPrice(null)).toThrow();
        expect(()=>formatPrice(undefined)).toThrow();
    });
})