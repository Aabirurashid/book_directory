const express=require('express')
const router=express.Router()
//defined routers
const {getdata, postdata, putdata, deletedata}=require('../controller/app')
router.get("/getdata",getdata)
router.post("/postdata",postdata)
router.put("/putdata/:id",putdata)
router.delete("/deletdata/:id",deletedata)

module.exports=router





	
	
