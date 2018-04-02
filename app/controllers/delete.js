const express = require('express');
const router = express.Router();
const itemsModel = require('../models/items');
router.delete('/todo/:val',function(req,res){
	itemsModel.find({item:req.params.val}).remove({item:req.params.val},function(err){
		if (err) throw err;
		res.json('');
	})
})

module.exports = (app)=>{
	app.use(router);
}
