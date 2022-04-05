const mongoose=require('mongoose');
const ProductSchema=mongoose.Schema({
name:String,
price:String,
category:String,
userId:String,
compony:String
});
module.exports=mongoose.model("products",ProductSchema);