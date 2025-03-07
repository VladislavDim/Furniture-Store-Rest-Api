import { Router } from "express";
import furnitureService from "../service/furnitureService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const furnitureController = Router();

//get all
furnitureController.get('/', async (req, res) => {
    let filter = req.query.where;
    
    if (filter) {
        const [key, value] = filter?.split('=');

        filter = {
            [key]: value.replaceAll('"', '').trim()
        }
    } else {
        filter = {};
    }

    const furnitures = await furnitureService.getAll(filter);

    res.json(furnitures);
});

//get one
furnitureController.get('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const furniture = await furnitureService.getOne(furnitureId);
    res.json(furniture);
});

//create
furnitureController.post('/', isAuth, async (req, res) => {
    const furnitureData = req.body;
    const userId = req.user.id;
    const furniture = await furnitureService.create(furnitureData, userId);

    res.json(furniture);
});

//update
furnitureController.put('/:furnitureId', async (req, res) => {
    const furnitureData = req.body;
    const furnitureId = req.params.furnitureId;
    const newFurntiture = await furnitureService.update(furnitureId, furnitureData);
    res.json(newFurntiture);
});

//delete
furnitureController.delete('/:furnitureId', async (req, res) => {
    await furnitureService.delete(req.params.furnitureId);
    res.json([]);
});
export default furnitureController;