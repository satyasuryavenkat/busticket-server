import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import busRouter from './routes/bus.js';

const app = express();
dotenv.config();

app.use(express.json({limit : "30mb", extended : true}));

app.use(express.urlencoded({ extended: true}));

app.use(cors());
app.use('/bus', busRouter);

app.get('/', (req,res)=> {
        res.send('Welcome to TodoList API');
});

const CONNECTION_URL = 'mongodb+srv://satya:satya@cluster0.vthtfoh.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5051;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, ()=> console.log(`Server Running on port ${PORT}`)))
.catch((error)=> console.log(error.message));


