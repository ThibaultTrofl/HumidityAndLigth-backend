// const Data = require("../../../model/Data");
import express, { Application, Request, Response,Errback } from "express";
async function postData(req: Request, res: Response) {
    try {
        console.log(req.body);
        console.log(req.query);
        console.log(req.header);

        return res.status(200);
    } catch (error) {
        // @ts-ignore
        console.log(error.message);
        // @ts-ignore
        res   // @ts-ignore
            .status(error.status || 500)
            // @ts-ignore
            .json({ message: error.message || "Internal Server Error" });
    }
}

module.exports = { postData };
