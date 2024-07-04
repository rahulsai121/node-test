const { where } = require('sequelize');
const Company = require('../model/companyModel');
const Review = require('../model/reviewModel');

exports.postcompany = async (req, res) => {

    const companyName=req.body.companyName
    let companyId;

    const existingCompany=await Company.findOne({where:{companyname:companyName}})
    if(existingCompany){
        companyId=existingCompany.id;
    }else{
        const newCompany = await Company.create({ companyname: companyName });
        companyId = newCompany.id;
    }

    const newReview = await Review.create({
        pros: req.body.pros,
        cons: req.body.cons,
        rating: req.body.rating,
        companyId: companyId
    });

    const companyData=await Company.findAll({
        where:{companyname:companyName},
        include: [Review] // Include the Review model
      })
    
    res.send({companyData})
    
      /*.then(comp=>{
        //console.log('company details------------',comp[0].dataValues.reviews)
        comp.forEach(company=>{
            //console.log(`Company: ${company.companyname}`);
            //console.log('Reviews:');
            //console.log('*********',company.reviews)
            let rating=0;
            company.reviews.forEach(rev=>{
                console.log(`pros:${rev.pros}********cons::${rev.cons}`)
                rating=rating+rev.rating
            })
            console.log('ratingXXXXXXXXXX',rating)
        })
    })*/
}

exports.getompany=async(req,res)=>{
    const companyData=await Company.findAll({
        include: [Review] // Include the Review model
      })
    
    res.send({companyData})
    
}
