var DragonExpress = DragonExpress || {
   Models      : {}, 
   Collections : {}, 
   Views       : {}
};

DragonExpress.Collections.DragonCollection = Backbone.Collection.extend({
   model : DragonExpress.Models.Dragon,
   url   : '/api/dragons'
});