const express=require('express');
const { admin } = require('./userauth/auth');
const app=express();
const connectDB=require("./config/Database")

const User = require('./models/user');


app.use(express.json())

app.post("/signup",async(req,res)=>{
    const vivek=new User(req.body)
    try{
        await vivek.save()
        res.status(201).json(vivek)
    }

    catch(err){
         res.status(400).json({ error: err.message });

    }

}

)




// app.use(express.json())

// app.get("/home",(req,res)=>{
//     res.send("this is home page")
// })


// app.post("/signup", async (req, res) => {
//     // there we created User instance
//     const user = new User(req.body);
//     try {
//         await user.save();
//         res.status(201).json(user);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }

// });

connectDB().then(()=>{
        console.log("database connected");
    
app.listen(3008,()=>{
  console.log("Server is listening on port 3008");
  
})
    
}).catch(err=>{
    console.log("db can not be connected");

    
})

// app.use("/admin",admin
// )

// app.get("/",(req,res)=>{
//     res.send("this is main page")
// })


// app.get("/about/:id",(req,res)=>{
//     console.log(req.query);
//     console.log(req.params);
    
    
//     res.send("this is about page")
// })

// app.get("/about/2",(req,res)=>{
//     res.send("this is 2about page")
// })
// app.get("/a/",(req,res)=>{
//     res.send("this is 2about page")
// })

// app.get("/admin/getuserdata",(req,res)=>{
//     res.send("admin can get all data")
// })

// app.get("/admin/deleteuserdata",(req,res)=>{
//     res.send("admin can delete all data")
// })

