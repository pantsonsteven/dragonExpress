var express          = require('express');
global.mongoose      = require('mongoose');
global.path          = require('path');
var bodyParser       = require('body-parser');
var methodOverride   = require('method-override');

global.db            = mongoose.connect('mongodb://localhost/dragons');

var app              = express();

app.use(bodyParser());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

var dragonsController = require(path.join(__dirname, 'dragonsController'));

app.get     ('/api/dragons',        dragonsController.index);
app.post    ('/api/dragons',        dragonsController.create);
app.put     ('/api/dragons/:id',    dragonsController.update);
app.delete  ('/api/dragons/:id',    dragonsController.delete);

app.listen(8000, function() {
   console.log("Dragons are listening on port 8000");
});