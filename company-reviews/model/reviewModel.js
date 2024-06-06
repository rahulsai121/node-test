const Sequelize=require('sequelize')
const sequelize=require('../utility/database')

const Review=sequelize.define('review',{
  
    pros:{
      type:Sequelize.STRING,
      allowNull:false
    },
    cons:{
      type:Sequelize.STRING,
      allowNull:false
    },
    rating:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
  })
  
  
  module.exports=Review;