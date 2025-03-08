const {calculateTotal} = require('../src/logic');

describe('calculateTotal',()=>{

    it('shoudl Check if large quantities are handled correctly',()=>{
        const products = [
            {price:3.75,quantity:800},
            {price:4.25,quantity:600}
        ];
        expect(calculateTotal(products)).toBe(5550);
    })

    it('should handle negative prices without error',()=>{
        const products = [
            {price:-10, quantity:2},
            {price:5, quantity:1},
        ];
        expect(calculateTotal(products)).toBe(-15)
    })

    it('should handle items with zero prices',()=>{
        const products=[
            {price:0,quantity:4},
            {price:5,quantity:2}
        ];
        expect(calculateTotal(products)).toBe(10);
    })
})