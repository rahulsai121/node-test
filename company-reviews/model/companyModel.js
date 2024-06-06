const Sequelize=require('sequelize')
const sequelize=require('../utility/database')

const company=sequelize.define('company',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    companyname:{
      type:Sequelize.STRING,
      allowNull:false,
    }
  })
  
  module.exports=company;