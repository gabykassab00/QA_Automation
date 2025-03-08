const {formatPrice} = require('../src/logic');

describe('format price',()=>{
    it('should format large numbers correctly',()=>{
        expect(formatPrice(146545.938)).toBe('$146545.94');
    });

    it('should format zero correctly',()=>{
        expect(formatPrice(0)).toBe("$0.00");
    });
    
})