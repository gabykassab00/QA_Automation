//importing the fetchuser function from api source code file
const {fetchUser} = require('../src/api');

//replacing the global fetch with a jest mock to stimulate api response 
global.fetch = jest.fn();

describe('fetchUser',()=>{
    //resetting the mock before each testv to ensure isolation
    beforeEach(()=>{
        fetch.mockClear();
    });
    
    //typical use case : stimulating a successful api call 
    it('should handle successfull api response',async()=>{
        const mockUser = {id:1 , name:'robert pires'};
        fetch.mockImplementationOnce(()=>
            new Promise(resolve => setTimeout(()=>resolve({
                ok:true,
                json:()=>Promise.resolve(mockUser)
            }),1000))
        );
        const answer = await fetchUser(1);
        expect(answer).toEqual(mockUser);
    });

    //error handling test case : testing the function response to a 404 not found error
    it('shoudl handle a 404 error',async ()=>{
        fetch.mockResolvedValueOnce({
            ok:false,
            status:404
        });
        await expect(fetchUser(4)).rejects.toThrow("User not found")
    });

    //edge case : testing a successful response with no data
    it('should handle sucessfull call with empty response',async()=>{
        fetch.mockResolvedValueOnce({
            ok:true,
            json:()=>Promise.resolve({})
        });
        const answer = await fetchUser(5);
        expect(answer).toEqual({});
    });
})