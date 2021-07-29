import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import productRoutes from './routes/product';
const app = express();
dotenv.config();

app.use(bodyParser.json());
//routes
app.use('/api',productRoutes);

//db connection
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: false,
    useCreateIndex: true
}).then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// Middleware
app.use(express.json());

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Server is runing on port : ${port}`);
})