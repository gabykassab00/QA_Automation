const {applyDiscount} = require('../src/logic');

describe('applyDiscount',()=>{

    it('should apply decimal percentage discount correctly',()=>{
        expect(applyDiscount(150,14.2)).toBe(128.7);
    })


})