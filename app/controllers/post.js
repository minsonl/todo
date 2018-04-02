const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const itemsModel = require('../models/items');
router.post('/todo',bodyParser.urlencoded({extended:true}),function(req,res){
	const itemOne = itemsModel({item:req.body.postValue}).save(function(err){
		if (err) throw err;
		res.json('');
	})
})

module.exports = (app)=>{
	app.use(router);
}
