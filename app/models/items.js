const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/todos");
const conn = mongoose.connection;
conn.on('error', () => {
  throw new Error('unable to connect to database');
});
const itemsSchema = new Schema({item:{type:String,required:true}});
const itemsModel = mongoose.model('items',itemsSchema);
module.exports = itemsModel;