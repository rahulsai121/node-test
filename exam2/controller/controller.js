const post=require('../model/post')
const comment=require('../model/comment')


exports.postpost= async (req, res) => {
    //console.log(req.body)
    const newpost= await post.create({
        link:req.body.link,
        des:req.body.des,
    })

    res.send(newpost.dataValues)
}

exports.getpost=async(req,res)=>{
    const postdata=await post.findAll({
        include: [comment] 
      })
    
    res.send({postdata})
    
}
exports.postcomment= async (req, res) => {
    //console.log(req.body)
    const newcomment= await comment.create({
        comment:req.body.comment,
        postId:req.body.postId

    })

    res.send(newcomment.dataValues)

}