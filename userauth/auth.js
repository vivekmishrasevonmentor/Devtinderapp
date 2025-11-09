const admin=(req,res,next)=>{
    const token="xyz"
    const isadminauth=token==="xyz"
    if(!isadminauth){
        res.status(401).send("unauthorized")

    }
    else{
        next()
    }
}

module.exports={
    admin
}