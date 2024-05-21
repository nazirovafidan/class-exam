const express = require('express')
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const cors = require("cors")
var bodyParser = require('body-parser')

app.use(cors())
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cardsSchema=new mongoose.Schema({
        image:String,
        price:Number,
        title:String,
        description:String
})

const cardModel=mongoose.model(('Cards'),cardsSchema)

app.get('/api/foods',async(req,res)=>{
    const foods = await cardModel.find()
    if(foods.length>0){
        res.send({
            message:'success',
            data:foods
        })
    }else{
        res.send({
            message:'not found',
            data:null
        })
    }
})

app.get('/api/foods/:id',async (req,res)=>{
    const { id } = req.params
    let foods
    try {
        foods = cardModel.findById(id)
    } catch (error) {
        res.send({
            error: error
        })
    }
    if (foods) {
        res.send({
            message: "success",
            data: foods,
        })
    } else {
        res.send({
            message: "not found",
            data: null
        })
    }
})


app.post('/api/foods',async (req,res)=>{
    const food = new cardModel(req.body)
    await food.save()
    res.send({
        message: "success",
        data: food
    })
})

app.delete("/api/foods/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const food = await cardModel.findByIdAndDelete(id);
        if (!food) {
            return res.status(404).send({
                message: "food not found"
            });
        }

        res.send({
            message: "food deleted successfully",
            data: food
        });
    } catch (error) {
        res.status(500).send({
            message: "Error deleting product",
            error: error.message
        });
    }
});


mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log('Connected!')
})

app.listen(port,()=>console.log(`Server is listening on ${port}`))