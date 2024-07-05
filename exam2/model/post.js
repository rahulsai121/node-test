const Sequelize=require('sequelize')
const sequelize=require('../utility/database')

const post=sequelize.define('post',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    link:{
      type:Sequelize.TEXT('long'),
      allowNull:false,
    },
    des:{
      type:Sequelize.STRING,
      allowNull:false,
    }
  })
  
  module.exports=post;