const {calculateTotal} = require('../src/logic');

describe('calculateTotal',()=>{

    it('Checks if large quantities are handled correctly',()=>{
        const products = [
            {price:3.75,quantity:800},
            {price:4.25,quantity:600}
        ];
        expect(calculateTotal(products)).toBe(5550);
    })
})