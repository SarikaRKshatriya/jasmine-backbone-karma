var app= window.app || {};
app.Collections = app.Collections || {};
app.Collections.Movies = Backbone.Collection.extend({
    getMoviesName:function(){
        return _.uniq(this.plunk("name"));
    }
})