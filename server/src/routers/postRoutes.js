const express = require("express");
const router = express.Router();
const post = require("../models/posts");
router.use(express.json());
router.use(express.urlencoded({extended:false}));
const multer  = require("multer");
var storage = multer.diskStorage(
    {
        destination: __dirname+'/uploads/',
        filename: function ( req, file, cb ) {
            const [name,extension] = file.originalname.split(".");
            filename = name +"."+ extension;
            cb( null, filename);
        }
    }
);



var upload = multer( { storage: storage } );


router.get("/",async (req,res)=>{
    try{
        const data = await post.find();
        res.status(200).json({
            status:"Success",
            data:data
        })
    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
    
});

router.post("/",upload.single("PostImage"),async(req,res)=>{
    try{
        const [name,extension] = req.file.originalname.split(".");
        const filename = name+"."+ extension;
        
        req.body.date = new Date(Date.now());
        await post.create({
            name:req.body.name,
            location:req.body.location,
            description:req.body.description,
            date:req.body.date,
            likes:0,
            PostImage:filename
        });
        res.status(200).json({status:"Success"});
    }catch(e){
        res.status(400).json({status:"failed",message:e.message});
    }
});

router.get("/images/:name",async(req,res)=>{
    const fileName = req.params.name;
    res.sendFile(__dirname+"/uploads/"+fileName);
})

module.exports = router;