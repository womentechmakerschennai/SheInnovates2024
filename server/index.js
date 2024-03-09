import express, { response } from "express"
import mongoose from "mongoose"
import  JsonWebToken from "jsonwebtoken"
import bcrypt from "bcrypt"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import Usermodels from "./model/User.js"
import companymodel from "./model/Jobs.js"
import community from "./model/Community.js"
import Eventmodel from "./model/Event.js"
import enquiremodel from "./model/Enquire.js"


const app=express()
dotenv.config()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:['GET',"POST"],
    credentials:true
}))

app.post("/register",(req,res)=>{
    const{name,email,password}=req.body
    bcrypt.hash(password,10)
    .then(hash=>{
        Usermodels.create({name:name,email:email,password:hash})
        .then(result=>res.json({status:"OK"}))
        .catch(err=>console.log(err))

    }).catch(err=>console.log(err))
})
app.get('/registerxp', (req, res) => {
    Usermodels.find({})
        .then(Jobs => res.json(Jobs))
         .catch(err =>  res.json(err))
         
});



app.post("/login",(req,res)=>{
    const{email,password}=req.body
   
        Usermodels.findOne({email:email})
        .then(user=>{
            if(user){
                bcrypt.compare(password,user.password,(err,response)=>{
                    if(response){
                        const token=JsonWebToken.sign({email:user.email,role:user.role},
                           "jwt-secret-key",{expiresIn:"1d"} )
                           res.cookie('token',token)
                           return res.json({Status:"success",role:user.role})
                    }else{
                        return res.json("username or password is incorrect")
                    }
                })
            }else{
                return res.json("no record exits")
            }
        }).catch(err=>console.log(err))
})

const verifyUser=(req,res,next)=>{
const token=req.cookie.token
if(!token){
    return res.json("token is expire")
}else{
    JsonWebToken.verify(token,"jwt-secret-key",(err,decode)=>{
        if(err){
            return res.json("error with token")
        }else{
            if(decode.role=="admin"){
                next()
            }else{
                return res.json("not admin")
            }
        }
    })
}

}
app.get("/dashbroad",verifyUser,(req,res)=>{
res.json("success")
})


app.post('/Createjob', (req, res) => {
    companymodel.create(req.body)
        .then(Users => res.json(Users))
         .catch(err =>  res.json(err))

});

app.get('/jobs', (req, res) => {
    companymodel.find({})
        .then(Jobs => res.json(Jobs))
         .catch(err =>  res.json(err))
         
});

app.post("/Createcommunity",(req,res)=>{
    community.create(req.body)
    .then(community=>res.json(community))
    .catch(err=>res.json(err))
})

app.get('/community', (req, res) => {
    community.find({})
        .then(community => res.json(community))
         .catch(err =>  res.json(err))
         
});
app.post("/CreateEvent",(req,res)=>{
    Eventmodel.create(req.body)
    .then(event=>res.json(event))
    .catch(err=>res.json(err))
})

app.get('/event', (req, res) => {
    Eventmodel.find({})
        .then(event => res.json(event))
         .catch(err =>  res.json(err))
         
});

app.post("/CreatEnquire",(req,res)=>{
    enquiremodel.create(req.body)
    .then(enquireform=>res.json(enquireform))
    .catch(err=>res.json(err))
})

// app.get('/enquire', (req, res) => {
//     enquiremodel.find({})
//         .then(enquireform => res.json(enquireform))
//          .catch(err =>  res.json(err))
         
// });


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB);
    console.log("mongodb connected success")
}
app.listen(process.env.PORT,()=>{
console.log("PORT 8000 connected")
})