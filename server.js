const express = require('express');
require('./src/database/connection')
var app = express();
const prospectRouter=require("./src/Routes/Prospect.route");
const userRouter=require("./src/Routes/User.route");
const RequestStatusRouter=require("./src/Routes/RequestStatus.route");
const RequestTypeRouter=require("./src/Routes/RequestType.route");
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });
const RequestRouter = require("./src/Routes/Request.route")
app.use(express.json());


app.use("/api/auth",prospectRouter);
app.use("/api/dashboard",userRouter);
app.use("/api/request",RequestStatusRouter);
app.use("/api/request",RequestTypeRouter);
app.use("/api/request",RequestRouter)



app.use(express.urlencoded( {
    extended : false
}));

app.listen(3000);