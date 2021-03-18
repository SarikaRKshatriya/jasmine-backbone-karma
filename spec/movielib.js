describe("getMovieName",function(){
    it("should be defined",function(){
        expect(window.getMovieName).toBeDefined();
    });
    it("shoud return movie name",function(){
        const result = getMovieName(['MI3','2','Movie is good'],0);
        expect(result).toEqual('MI3');
    });
})