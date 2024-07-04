const Sequelize=require('sequelize')
const sequelize=require('../utility/datebase')

const attendance=sequelize.define('date',{
    id:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
    },
    Date:{
      type:Sequelize.DATEONLY,
      allowNull:false,
    }
  })
  
  module.exports=attendance;