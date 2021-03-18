




describe("A movie collection",function(){

    it("should exist",function(){
        expect(app.Collections.Movies).toBeDefined();
    });

    it("should contain movies",function(){
        const noRestrictions = new app.Models.Movie(FIXTURES.movies.noRestrictions);
        const withSongs = new app.Models.Movie(FIXTURES.movies.withSongs);
        expect(noRestrictions.containSongs()).toBe(false);
        expect(withSongs.containSongs()).toBe(false);
    });
    // it("should consolidate movie names",function(){
    //     const movies = new app.Collections.Movies([FIXTURES.movies.noRestrictions,FIXTURES.movies.withSongs]);
    //     expect(movies.getMoviesName()).toEqual(["MI3","SRK"]);
    // });
});