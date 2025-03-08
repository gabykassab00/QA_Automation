const {formatPrice} = require('../src/logic');

describe('format price',()=>{
    it('should format large numbers correctly',()=>{
        expect(formatPrice(146545.938)).toBe('$146545.94');
    });
})