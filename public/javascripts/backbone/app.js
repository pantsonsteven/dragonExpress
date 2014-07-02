var DragonExpress = DragonExpress || {
   Models      : {}, 
   Collections : {}, 
   Views       : {}
};

DragonExpress.initialize = function() {
   var collection = new DragonExpress.Collections.DragonCollection();

   var listView = new DragonExpress.Views.DragonListView({
      collection : collection,
      el         : $(".dragon-list")
   });

   collection.fetch();

   $('.dragon-form').submit(function(e) {
      e.preventDefault();

      var name       = $('.dragon-name').val();
      var wingspan   = $('.dragon-wingspan').val();
      var heatIndex  = $('.dragon-heat-index').val();

      $('.dragon-name')       .val('');
      $('.dragon-wingspan')   .val('');
      $('.dragon-heat-index') .val('');

      collection.create({  
         name: name,
         wingspan: wingspan, 
         heatIndex: heatIndex 
      });
   });
};

$(function() {
   $('body').hide();
   DragonExpress.initialize();
   $('body').fadeIn(1000);
});