import { RequestHandler } from "express";
import { Inventory } from "@/src/models/inventoryModels/inventoryModel";
import { Guild } from "@/src/models/guildModel";
import { getAccountIdForRequest } from "@/src/services/loginService";
import { toOid } from "@/src/helpers/inventoryHelpers";

// eslint-disable-next-line @typescript-eslint/no-misused-promises
const placeDecoInController: RequestHandler = async (req, res) => {
    res.sendStatus(200);
};

export { placeDecoInController };
