import Furniture from "../models/Furniture.js"

export default {
    create(furnitureData, userId) {
        return Furniture.create({ ...furnitureData, creator: userId });
    delete(furnitureId) {
        return Furniture.findByIdAndDelete(furnitureId);
    }
}