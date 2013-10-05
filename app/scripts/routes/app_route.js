App.Router.map(function () {
    this.resource("detail", {path: "detail/:api_id"});
});

App.ApplicationRoute = Ember.Route.extend({
    model: function () {
        return apis;
    }
});