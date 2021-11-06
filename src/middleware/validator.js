"use strict";

function validator(req, res, next){
    if(! req.query.name){
        throw new Error("bad request ! you need to pass your name as a query");
    };

    next();
};

module.exports= validator;