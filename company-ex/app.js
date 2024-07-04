const express=require('express')
const sequelize=require('./utility/database')
const CompanyA = require('./model/companyA');
const CompanyB=require('./model/companyB')

const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

CompanyA.hasOne(CompanyB);

.belongsTo(User);

sequelize.sync()
.then(() => {
    CompanyA.create({name:'rahul'})
    .then(()=>console.log('companyok'))
    console.log('Database synced');
    app.listen(3000, () => {
        console.log('Server is running');
    });
})