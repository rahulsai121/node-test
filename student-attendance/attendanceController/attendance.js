const attendance=require('../model/attendence')

exports.postattendance=async(req,res)=>{
    const date =req.body.date
    let attendanceid;

    const existingAttendance=await attendance.findOne({where:{Date:date}})

    if(existingAttendance){
        attendanceid=existingAttendance.id
    }
    else{
        const newDate=await attendance.create({Date:date})
        attendanceid=newDate.id;
    }

}