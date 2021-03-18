var app = window.app || {};
app.Models = app.Models || {};
app.Models.Movie = Backbone.Model.extend({
    defaults: function(){
        return{
            name:"unnamed",
            rating: 0,
            genre:"unnamed",
            songs:[],
        };
    },
    containSongs:function(){
        return this.checkForSong('isSong');
    },
    checkForSong: function(propertyName){
        const songs = this.get("songs");
        for(var i=0;i<songs.length;i++){
            if(songs[i][propertyName]){
                return true;
            }
            return false;
        }
    }
});

