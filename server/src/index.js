import express from 'express';
import mongoose from 'mongoose';

const app = express();

try {
    const uri = 'mongodb://127.0.0.1:27017/furnitures'
    await mongoose.connect(uri);

    console.log('Db connected successfully!');
} catch (error) {
    console.log('Connection to DB failted!');
    console.log(error.message);
}


app.get('/', (req, res) => {
    res.json({ message: 'it works!' });
});

app.listen(3030, () => console.log('RESTful server os running on http://localhost:3030...'));