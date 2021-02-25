// const express = require('express')
// const products = require('./data/products')
// const dotenv = require('dotenv')
import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import connectDB from './config/db.js' 
import colors from 'colors'



const app = express()
dotenv.config()

connectDB()  

app.get('/', (req,res) =>{
    res.send("API is running... ")
})


app.get('/api/products', (req,res) =>{
    res.json(products)
})

app.get('/api/products/:id', (req,res) =>{

    const product = products.find(p =>p._id === req.params.id)
    res.json(product)
})

app.set('port', process.env.PORT || 3000);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.green.underline.bold))