const express=require('express')
const cors=require('cors')

const sequelize=require('./utility/datebase')
const controller=require('./attendanceController/attendance')
const attendance=require('./model/attendence')
const student=require('./model/students')

const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const studentsData=[{Name:'Rahul'},{Name:'Ravi'},{Name:'Guru'},{Name:'Rani'},{Name:'Ram'}]

student.bulkCreate(studentsData)

student.belongsToMany(attendance,{ through: 'StudentAttendance' })
attendance.belongsToMany(student,{ through: 'StudentAttendance' })


app.post('/student-attendance',(req,res,next)=>{
    controller.postattendance(req,res)
})


sequelize.sync()
    .then(() => {
        console.log('Database synced');
        app.listen(3000, () => {
            console.log('Server is running');
        });
    })