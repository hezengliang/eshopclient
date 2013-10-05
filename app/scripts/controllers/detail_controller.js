App.DetailController = Ember.ObjectController.extend({
    actions: {
        invoke: function (params) {
            alert("The action <" + params.name + ": http://" + params.domain + params.url + "> has been invoked.");
        }
    }
});