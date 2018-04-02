const express = require('express');
const router = express.Router();
const itemsModel = require('../models/items');
router.get('/todo',(req,res,next)=>{
	itemsModel.find({},function(err,data){
		res.render('todo',{datas:data});
	})
})

module.exports = (app)=>{
	app.use(router);
}
