const express=require('express')
const cors=require('cors')
const controller=require('./controller/controller')
const sequelize = require('./utility/database');



const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const post=require('./model/post')
const comment=require('./model/comment')


app.post('/submit',(req,res,next)=>{
    controller.postpost(req,res)
})

app.get('/submit',(req,res,next)=>{
    controller.getpost(req,res)
})

app.post('/comment',(req,res,next)=>{
    controller.postcomment(req,res)
})


post.hasMany(comment)

sequelize.sync({force:true})
    .then(() => {
        console.log('Database synced');
        app.listen(3000, () => {
            console.log('Server is running');
        });
})

