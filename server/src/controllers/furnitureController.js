import { Router } from "express";
import furnitureService from "../service/furnitureService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const furnitureController = Router();

//create
furnitureController.post('/', isAuth, async (req, res) => {
    const furnitureData = req.body;
    const userId = req.user.id;
    const furniture = await furnitureService.create(furnitureData, userId);

    res.json(furniture);
});
export default furnitureController;