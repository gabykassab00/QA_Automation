const {fetchUser} = require('../src/api');

global.fetch = jest.fn();

describe('fetchUser',()=>{
    
    beforeEach(()=>{
        fetch.mockClear();
    });

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

    it('shoudl handle a 404 error',async ()=>{
        fetch.mockResolvedValueOnce({
            ok:false,
            status:404
        });
        await expect(fetchUser(4)).rejects.toThrow("User not found")
    })
})