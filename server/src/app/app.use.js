
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
const use = (app) => {
    app.use(cors());
    app.use(express.json({limit : "14kb"}));
    app.use(express.urlencoded({extended : true}));
    app.use(cookieParser());
};

export default use;