const Sequelize=require('sequelize')
const sequelize=require('../utility/datebase')

const student=sequelize.define('student',{
    Name:{
      type:Sequelize.STRING
    },
    
  })
  
  module.exports=student;