var Dragon = require(path.join(__dirname, 'dragon'));

exports.index = function(req, res) {
   Dragon.find(function(err, dragon) {
      if (err) return console.log(err);
      res.send(dragon);
   });
};

exports.create = function(req, res) {
   Dragon.create({
      name        : req.body.name,
      wingspan    : req.body.wingspan,
      heatIndex   : req.body.heatIndex
   }), function(err, dragon) {
      if (err) return console.log(err);
      res.send(dragon);
   };
};

exports.update = function(req, res) {
   Dragon.findOneAndUpdate({ _id: req.params.id }, {
      name        : req.body.name,
      wingspan    : req.body.wingspan,
      heatIndex   : req.body.heatIndex     
   }, function(err, dragon) {
      if (err) return console.log(err);
      res.send({'success': "Dragon Updated"});
   });
};

exports.delete = function(req, res) {
   Dragon.findOneAndRemove({_id: req.params.id}, function(err) {
      if (err) return console.log(err);
      res.send({"success": "Dragon Deleted"})
   });
};