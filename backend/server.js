import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js' 
import colors from 'colors'
// import products from './data/products.js'
import productRoutes from './routes/productRoutes.js'


const app = express()
dotenv.config()

connectDB()  

app.get('/', (req,res) =>{
    res.send("API is running... ")
})
app.use ('/api/products',productRoutes)


app.set('port', process.env.PORT || 3000);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.green.underline.bold))