import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes.js';

const app = express();

try {
    const uri = 'mongodb://127.0.0.1:27017/furnitures'
    await mongoose.connect(uri);

    console.log('Db connected successfully!');
} catch (error) {
    console.log('Connection to DB failted!');
    console.log(error.message);
}
//Setup CORS
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     next();
// });
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3030, () => console.log('RESTful server os running on http://localhost:3030...'));