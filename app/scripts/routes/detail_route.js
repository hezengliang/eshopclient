App.DetailRoute = Ember.Route.extend({
    model: function (params) {
        return apis.findBy("id", params.api_id);
    }
});