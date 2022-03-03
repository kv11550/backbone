import express, { Request, Response } from "express";
/**
 * Router Definition
 */
export const cacheRouter = express.Router();

// GET items
cacheRouter.get("/", async (req: Request, res: Response) => {
    try {
        res.status(200).send("hello");
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});