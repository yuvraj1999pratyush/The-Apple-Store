//imports
const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');

//configuration
dotenv.config();
connectDB();
const app = express();

//middlewares
//{middlesware has a function which takes (error, req, res, next)}


//APIs
app.get('/', (req, res) => {
    res.send('API is Running...')
})

app.use('/api/products', productRoutes);

//middleware for error handling
app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));