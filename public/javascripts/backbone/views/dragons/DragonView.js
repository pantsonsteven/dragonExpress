var DragonExpress = DragonExpress || {
   Models      : {}, 
   Collections : {}, 
   Views       : {}
};

DragonExpress.Views.DragonView = Backbone.View.extend({
   tagName           : 'li', 
   template          : _.template($('.dragon-template').html()),
   editFormTemplate  : _.template($('.edit-dragon-template').html()),
   initialize        : function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
   },
   render            : function() {
      this.$el.html(this.template( this.model.attributes ));
      return this;
   },
   events            : {
      'click [data-action="destroy"]'  : 'destroyDragon',
      'click [data-action="edit"]'     : 'renderEditForm',
   },
   destroyDragon     : function(e) {
      e.preventDefault();
      this.model.destroy();
      return this;
   },
   renderEditForm    : function() {
      var that = this;
      this.$el.html(this.editFormTemplate( this.model.attributes ));
      this.$el.find('.edit-dragon-form').submit(function(e) {
         e.preventDefault();
         
         var nameField        = that.$el.find('.edit-dragon-name');
         var wingspanField    = that.$el.find('.edit-dragon-wingspan');
         var heatIndexField   = that.$el.find('.edit-dragon-heat-index');

         newName              = nameField.val();
         newWingspan          = wingspanField.val();
         newHeatIndex         = heatIndexField.val();

         that.model.set({
            name        : newName,
            wingspan    : newWingspan,
            heatIndex   : newHeatIndex
         });

         that.model.save();
      });
      return this;
   }
});