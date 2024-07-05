const Sequelize=require('sequelize')

const sequelize=new Sequelize('node-test','root','Rahul55555',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;