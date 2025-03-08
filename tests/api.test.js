const {fetchuser} = require('../src/api');

global.fetch = jest.fn();

describe('fetchUser',()=>{
    
    beforeEach(()=>{
        fetch.mockClear();
    });
    

})