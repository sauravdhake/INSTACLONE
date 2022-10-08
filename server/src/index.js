const app = require("./app");
const port = process.env.PORT || 8080;
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://BLOG_APP:8208431391@cluster0.k2u4lee.mongodb.net/BLOG_APP",()=>console.log("DB is connected"));
app.listen(port,()=>console.log(`Server is running at ${port}`))
