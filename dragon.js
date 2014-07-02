var Schema = mongoose.Schema;

var DragonSchema = new Schema({
   name        : String,
   wingspan    : Number,
   heatIndex   : Number,
});

module.exports = db.model('Dragon', DragonSchema);