import Furniture from "../models/Furniture.js"

export default {
    getAll(filter = {}) {
        return Furniture.find(filter);
    },
    getOne(furnitureId) {
        return Furniture.findById(furnitureId)
    },
    create(furnitureData, userId) {
        return Furniture.create({ ...furnitureData, creator: userId });
    delete(furnitureId) {
        return Furniture.findByIdAndDelete(furnitureId);
    }
}