"use strict";

const express = require("express");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8080;

const pathNotFound = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const logger = require("./middleware/logger");
const validator = require("./middleware/validator");

// middle wares
app.use(logger);



// home route
app.get("/", (req, res) => {
    res.status(200).send("Server is working fine ^_^");    
});

// person route
app.get('/person', validator, (req,res) => {
    res.status(200).json({
      name: req.query.name  
    });
});

// error handlers
app.use('*', pathNotFound);
app.use(errorHandler);

// start function
function start(){
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};


module.exports= {
    server: app,
    start: start
};