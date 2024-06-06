const express=require('express')
const cors=require('cors')
const sequelize = require('./utility/database');

const controller=require('./controller/revieweController')

const Company=require('./model/companyModel')
const Review=require('./model/reviewModel');

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/submit-reviews',(req,res,next)=>{
    controller.postcompany(req,res)
})
app.get('/submit-reviews',(req,res,next)=>{
    controller.getompany(req,res)
})


Company.hasMany(Review)
Review.belongsTo(Company)

sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(3000, () => {
            console.log('Server is running');
        });
    })