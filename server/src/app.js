const express = require("express");
const app = express();
const postRouter = require("./routers/postRoutes");
app.use(express.json());
const cors = require("cors");

app.use(cors());
app.use("/post",postRouter);

// app.get("/images/:name",(req,res)=>{
//     const fileName = req.params.name;
//     res.sendFile(__dirname+"/uploads/"+fileName);
//     //D:\10x Academy\React and node Integration\InstaClone\Server\uploads\tiranga.jpg
// })


module.exports = app;