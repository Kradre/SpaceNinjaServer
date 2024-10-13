import { RequestHandler } from "express";

const placeDecoInController: RequestHandler = (_req, res) => {
    res.sendStatus(200);
};

export { placeDecoInController };
