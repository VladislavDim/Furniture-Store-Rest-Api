import { model, Schema, Types } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String,
        minlength: 4
    },
    model: {
        type: String,
        minlength: 4
    },
    year: {
        type: Number,
        min: 1950,
        max: 2050
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    img: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: false
    },
    creator: {
        type: Types.ObjectId,
        ref: 'User'
    }
});

const Furniture = model('Furniture', furnitureSchema);

export default Furniture;