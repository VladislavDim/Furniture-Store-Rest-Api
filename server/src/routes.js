import { Router } from "express";
import userController from "./controllers/userController.js";

const routes = Router();

routes.get('/', (req, res) => {
    res.json({ message: 'it works!' });
});
routes.get('/data/catalog', (req, res) => {
    res.json([]);
});

routes.use('/users', userController);

export default routes; 