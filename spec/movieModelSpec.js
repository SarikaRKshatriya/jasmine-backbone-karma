describe("A movie",function(){
    it("Should exist",function(){
        expect(app.Models.Movie).toBeDefined();
    });
    it("Should have certain default values",function(){
        const movie = new app.Models.Movie();
        expect(movie.get("name")).toEqual("unnamed");
        expect(movie.get("rating")).toEqual(0);
        expect(movie.get("genre")).toEqual("unnamed");
        expect(movie.get("songs").length).toEqual(0);
    });

    it("Should identify if it has songs",function(){
        const noRestrictions = new app.Models.Movie(FIXTURES.movies.noRestrictions);
        const withSongs = new app.Models.Movie(FIXTURES.movies.withSongs);

        expect(noRestrictions.containSongs()).toBe(false);
        expect(withSongs.containSongs()).toBe(false);
    });

})