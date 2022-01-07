require('dotenv').config({ path: './config.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 4002

const productRoute = require("./routes/productRoute");//
const employeeRoute = require("./routes/employeeRoute");//


const  app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/product", productRoute);
app.use("/employee", employeeRoute);


//Routing table

app.get("/",(req,res)=>{
    console.log("Hello from index");
    res.send("Hello from index");
});


app.get("/login",(req,res)=>{

    res.send("Hello from login");
});

app.post("/register",(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.email);
    res.send("Hello from register");
});
//API Product



///////////////////////////////////////////////







app.listen(port,()=>{
    console.log(`App is running on port ${port}` );
} );





