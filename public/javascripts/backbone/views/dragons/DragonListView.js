var DragonExpress = DragonExpress || {
   Models      : {}, 
   Collections : {}, 
   Views       : {}
};

DragonExpress.Views.DragonListView = Backbone.View.extend({
   initialize: function() {
      this.listenTo(this.collection, 'add', this.render);
   },
   render: function() {
      var that = this;
      this.$el.empty();
      _.each(this.collection.models, function(dragon) {
         var dragonView = new DragonExpress.Views.DragonView({ model: dragon });
         that.$el.prepend(dragonView.render().el);
      });

   }
});